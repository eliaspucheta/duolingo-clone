import { SimpleForm, Create, TextInput, required, Link } from "react-admin";

import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export const CourseCreate = () => {
  return (
    <Create>
      <div className="pt-4 pl-4">
        <Link to="/courses">
          <Button variant="adminPanelBack" size="sm">
            <ChevronLeft /> RETURN
          </Button>
        </Link>
      </div>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} label="Title" />
        <TextInput source="imageSrc" validate={[required()]} label="Image" />
      </SimpleForm>
    </Create>
  );
};
