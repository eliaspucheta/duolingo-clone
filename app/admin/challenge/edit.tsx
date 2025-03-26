import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import {
  SimpleForm,
  Edit,
  SelectInput,
  TextInput,
  required,
  ReferenceInput,
  NumberInput,
  Link,
} from "react-admin";

export const ChallengeEdit = () => {
  return (
    <Edit>
      <div className="pt-4 pl-4">
        <Link to="/challenges">
          <Button variant="adminPanelBack" size="sm">
            <ChevronLeft /> RETURN
          </Button>
        </Link>
      </div>
      <SimpleForm>
        <TextInput source="question" validate={[required()]} label="Pregunta" />
        <SelectInput
          source="type"
          choices={[
            {
              id: "SELECT",
              name: "SELECT",
            },
            {
              id: "ASSIST",
              name: "ASSIST",
            },
          ]}
          validate={[required()]}
        />
        <ReferenceInput source="lessonId" reference="lessons" />
        <NumberInput source="order" validate={[required()]} label="Orden" />
      </SimpleForm>
    </Edit>
  );
};
