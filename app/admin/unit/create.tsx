import { SimpleForm, Create, TextInput, required, ReferenceInput, NumberInput } from "react-admin";

export const UnitCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput
          source="title"
          validate={[required()]}
          label="Titulo"
        />
        <TextInput
          source="description"
          validate={[required()]}
          label="Descripción"
        />
        <ReferenceInput
          source="courseId"
          reference="cursos"
        />
        <NumberInput
          source="order"
          validate={[required()]}
          label="Orden"
        />
      </SimpleForm>
    </Create>
  );
};