import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { SimpleForm, Edit, TextInput, required, Link } from "react-admin";

export const CourseEdit = () => {
  return (
    <Edit>
      <div className="pt-4 pl-4">
        <Link to="/courses">
          <Button variant="adminPanelBack" size="sm">
            <ChevronLeft /> RETURN
          </Button>
        </Link>
      </div>
      <SimpleForm>
        <TextInput source="id" validate={[required()]} label="Id" />
        <TextInput source="title" validate={[required()]} label="Title" />
        <TextInput source="imageSrc" validate={[required()]} label="Image" />
      </SimpleForm>
    </Edit>
  );
};
