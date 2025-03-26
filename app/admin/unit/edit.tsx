import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import {
  SimpleForm,
  Edit,
  TextInput,
  required,
  ReferenceInput,
  NumberInput,
  Link,
} from "react-admin";

export const UnitEdit = () => {
  return (
    <Edit>
      <div className="pt-4 pl-4">
        <Link to="/units">
          <Button variant="adminPanelBack" size="sm">
            <ChevronLeft /> RETURN
          </Button>
        </Link>
      </div>
      <SimpleForm>
        <NumberInput source="id" validate={[required()]} label="Id" />
        <TextInput source="title" validate={[required()]} />
        <TextInput source="description" validate={[required()]} />
        <ReferenceInput source="courseId" reference="courses" />
        <NumberInput source="order" validate={[required()]} />
      </SimpleForm>
    </Edit>
  );
};
