import { SimpleForm, Create, BooleanInput, TextInput, required, ReferenceInput } from "react-admin";

export const ChallengeOptionCreate = () => {
  return (
    <Create>
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
    </Create>
  );
};