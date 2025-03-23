import { SimpleForm, Edit, BooleanInput, TextInput, required, ReferenceInput } from "react-admin";

export const ChallengeOptionEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput
          source="text"
          validate={[required()]}
          label="Texto"
        />
        <BooleanInput
          source="correct"
          label="Opción correcta"
        />
        <ReferenceInput
          source="challengeId"
          reference="Desafíos"
        />
        <TextInput
          source="ImageSrc"
          label="URL de la imagen"
        />
        <TextInput
          source="audioSrc"
          label="URL del audio"
        />
      </SimpleForm>
    </Edit>
  );
};