import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    adminId: "",
    schoolName: "",
    state: "",
    designation: "",
    district: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields are filled
    if (!formData.name || !formData.adminId || !formData.schoolName || !formData.state || !formData.designation || !formData.district) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before proceeding.",
        variant: "destructive"
      });
      return;
    }

    // Store admin data (in a real app, this would be sent to backend)
    localStorage.setItem("adminData", JSON.stringify(formData));
    
    toast({
      title: "Login Successful",
      description: `Welcome, ${formData.name}!`,
    });
    
    // Navigate to admin dashboard
    navigate("/admin-dashboard");
  };

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-elegant">
        <CardHeader className="text-center pb-6">
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-4 top-4"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </Button>
          
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 p-4 rounded-full">
              <Shield className="h-12 w-12 text-primary" />
            </div>
          </div>
          
          <CardTitle className="text-2xl font-bold text-primary">
            Administrator Login
          </CardTitle>
          <p className="text-muted-foreground mt-2">
            Enter your details to access the administration portal
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="adminId">Administrator ID</Label>
              <Input
                id="adminId"
                type="text"
                placeholder="Enter your admin ID (e.g., ADM2024001)"
                value={formData.adminId}
                onChange={(e) => setFormData({...formData, adminId: e.target.value})}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="designation">Designation</Label>
              <Select
                value={formData.designation}
                onValueChange={(value) => setFormData({...formData, designation: value})}
                required
              >
                <SelectTrigger id="designation">
                  <SelectValue placeholder="Select your designation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="principal">Principal</SelectItem>
                  <SelectItem value="vice-principal">Vice Principal</SelectItem>
                  <SelectItem value="headmaster">Headmaster</SelectItem>
                  <SelectItem value="coordinator">Academic Coordinator</SelectItem>
                  <SelectItem value="administrator">School Administrator</SelectItem>
                  <SelectItem value="director">Director</SelectItem>
                  <SelectItem value="trustee">School Trustee</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="schoolName">School Name</Label>
              <Input
                id="schoolName"
                type="text"
                placeholder="Enter your school name"
                value={formData.schoolName}
                onChange={(e) => setFormData({...formData, schoolName: e.target.value})}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Select
                value={formData.state}
                onValueChange={(value) => setFormData({...formData, state: value})}
                required
              >
                <SelectTrigger id="state">
                  <SelectValue placeholder="Select your state" />
                </SelectTrigger>
                <SelectContent>
                  {indianStates.map((state) => (
                    <SelectItem key={state} value={state.toLowerCase().replace(/\s+/g, '-')}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="district">District</Label>
              <Input
                id="district"
                type="text"
                placeholder="Enter your district"
                value={formData.district}
                onChange={(e) => setFormData({...formData, district: e.target.value})}
                required
              />
            </div>
            
            <Button type="submit" className="w-full" size="lg">
              Login to Admin Portal
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;