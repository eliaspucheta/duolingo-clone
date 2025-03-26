import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import {
  SimpleForm,
  Create,
  BooleanInput,
  TextInput,
  required,
  ReferenceInput,
  Link,
} from "react-admin";

export const ChallengeOptionCreate = () => {
  return (
    <Create>
      <div className="pt-4 pl-4">
        <Link to="/challengeOptions">
          <Button variant="adminPanelBack" size="sm">
            <ChevronLeft /> RETURN
          </Button>
        </Link>
      </div>
      <SimpleForm>
        <TextInput source="text" validate={[required()]} />
        <BooleanInput source="correct" label="Correct option" />
        <ReferenceInput source="challengeId" reference="challenges" />
        <TextInput source="ImageSrc" label="Image URL" />
        <TextInput source="audioSrc" label="Audio URL" />
      </SimpleForm>
    </Create>
  );
};
