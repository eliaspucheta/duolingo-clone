import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import {
  SimpleForm,
  Create,
  TextInput,
  required,
  ReferenceInput,
  NumberInput,
  Link,
} from "react-admin";

export const LessonCreate = () => {
  return (
    <Create>
      <div className="pt-4 pl-4">
        <Link to="/lessons">
          <Button variant="adminPanelBack" size="sm">
            <ChevronLeft /> BACK
          </Button>
        </Link>
      </div>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} />
        <ReferenceInput source="unitId" reference="units" />
        <NumberInput source="order" validate={[required()]} />
      </SimpleForm>
    </Create>
  );
};
