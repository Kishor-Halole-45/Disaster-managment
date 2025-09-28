import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const StudentLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    registrationNumber: "",
    class: "",
    division: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields are filled
    if (!formData.name || !formData.registrationNumber || !formData.class || !formData.division) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before proceeding.",
        variant: "destructive"
      });
      return;
    }

    // Store student data (in a real app, this would be sent to backend)
    localStorage.setItem("studentData", JSON.stringify(formData));
    
    toast({
      title: "Login Successful",
      description: `Welcome, ${formData.name}!`,
    });
    
    // Navigate to student dashboard
    navigate("/student-dashboard");
  };

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
              <BookOpen className="h-12 w-12 text-primary" />
            </div>
          </div>
          
          <CardTitle className="text-2xl font-bold text-primary">
            Student Login
          </CardTitle>
          <p className="text-muted-foreground mt-2">
            Enter your details to access the learning portal
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
              <Label htmlFor="registration">Registration Number</Label>
              <Input
                id="registration"
                type="text"
                placeholder="Enter your registration number (e.g., STU2024001)"
                value={formData.registrationNumber}
                onChange={(e) => setFormData({...formData, registrationNumber: e.target.value})}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="class">Class</Label>
              <Select
                value={formData.class}
                onValueChange={(value) => setFormData({...formData, class: value})}
                required
              >
                <SelectTrigger id="class">
                  <SelectValue placeholder="Select your class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Class 1</SelectItem>
                  <SelectItem value="2">Class 2</SelectItem>
                  <SelectItem value="3">Class 3</SelectItem>
                  <SelectItem value="4">Class 4</SelectItem>
                  <SelectItem value="5">Class 5</SelectItem>
                  <SelectItem value="6">Class 6</SelectItem>
                  <SelectItem value="7">Class 7</SelectItem>
                  <SelectItem value="8">Class 8</SelectItem>
                  <SelectItem value="9">Class 9</SelectItem>
                  <SelectItem value="10">Class 10</SelectItem>
                  <SelectItem value="11">Class 11</SelectItem>
                  <SelectItem value="12">Class 12</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="division">Division</Label>
              <Select
                value={formData.division}
                onValueChange={(value) => setFormData({...formData, division: value})}
                required
              >
                <SelectTrigger id="division">
                  <SelectValue placeholder="Select your division" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A">Division A</SelectItem>
                  <SelectItem value="B">Division B</SelectItem>
                  <SelectItem value="C">Division C</SelectItem>
                  <SelectItem value="D">Division D</SelectItem>
                  <SelectItem value="E">Division E</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button type="submit" className="w-full" size="lg">
              Login to Student Portal
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentLogin;