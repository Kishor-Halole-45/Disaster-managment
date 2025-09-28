import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TeacherLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    teacherId: "",
    subject: "",
    department: "",
    grade: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields are filled
    if (!formData.name || !formData.teacherId || !formData.subject || !formData.department || !formData.grade) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before proceeding.",
        variant: "destructive"
      });
      return;
    }

    // Store teacher data (in a real app, this would be sent to backend)
    localStorage.setItem("teacherData", JSON.stringify(formData));
    
    toast({
      title: "Login Successful",
      description: `Welcome, ${formData.name}!`,
    });
    
    // Navigate to teacher dashboard
    navigate("/teacher-dashboard");
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
            <div className="bg-secondary/10 p-4 rounded-full">
              <Users className="h-12 w-12 text-secondary" />
            </div>
          </div>
          
          <CardTitle className="text-2xl font-bold text-secondary">
            Teacher Login
          </CardTitle>
          <p className="text-muted-foreground mt-2">
            Enter your details to access the teaching portal
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
              <Label htmlFor="teacherId">Teacher ID</Label>
              <Input
                id="teacherId"
                type="text"
                placeholder="Enter your teacher ID (e.g., TCH2024001)"
                value={formData.teacherId}
                onChange={(e) => setFormData({...formData, teacherId: e.target.value})}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Primary Subject</Label>
              <Select
                value={formData.subject}
                onValueChange={(value) => setFormData({...formData, subject: value})}
                required
              >
                <SelectTrigger id="subject">
                  <SelectValue placeholder="Select your primary subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mathematics">Mathematics</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="socialstudies">Social Studies</SelectItem>
                  <SelectItem value="hindi">Hindi</SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                  <SelectItem value="biology">Biology</SelectItem>
                  <SelectItem value="computerscience">Computer Science</SelectItem>
                  <SelectItem value="physical-education">Physical Education</SelectItem>
                  <SelectItem value="arts">Arts</SelectItem>
                  <SelectItem value="music">Music</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Select
                value={formData.department}
                onValueChange={(value) => setFormData({...formData, department: value})}
                required
              >
                <SelectTrigger id="department">
                  <SelectValue placeholder="Select your department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="primary">Primary School</SelectItem>
                  <SelectItem value="middle">Middle School</SelectItem>
                  <SelectItem value="secondary">Secondary School</SelectItem>
                  <SelectItem value="senior-secondary">Senior Secondary</SelectItem>
                  <SelectItem value="special-education">Special Education</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="grade">Grade Level Teaching</Label>
              <Select
                value={formData.grade}
                onValueChange={(value) => setFormData({...formData, grade: value})}
                required
              >
                <SelectTrigger id="grade">
                  <SelectValue placeholder="Select grade level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-3">Grades 1-3</SelectItem>
                  <SelectItem value="4-5">Grades 4-5</SelectItem>
                  <SelectItem value="6-8">Grades 6-8</SelectItem>
                  <SelectItem value="9-10">Grades 9-10</SelectItem>
                  <SelectItem value="11-12">Grades 11-12</SelectItem>
                  <SelectItem value="all">All Grades</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button type="submit" className="w-full" size="lg" variant="secondary">
              Login to Teacher Portal
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherLogin;