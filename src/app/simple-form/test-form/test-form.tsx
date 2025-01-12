"use client";

import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import CustomSelect from "@/app/simple-form/test-form/custom-select/custom-select";
import CustomInput from "@/app/simple-form/test-form/custom-input/custom-input";
import { selectOptions } from "@/app/simple-form/test-form/constants";

// тут будет функция с запросом в бекенд, пока для теста просто залогируем
// как правило запрос асинхронный, поэтому сразу сделаем асинхронным
const sendToApi: any = async (data: any) => console.log("Данные в форме", data);

// мы можем создать тип с полями, которые хотим хранить в форме, и отправить в useForm в виде дженерика
// а также в нашу функцию сабмита
interface FormValues {
  input?: string;
  customInput?: string;
  customSelect?: string;
}

const TestForm: FC = () => {
  const form = useForm<FormValues>();

  // наша функция сабмита
  const onSubmit = async (values: FormValues) => {
    await sendToApi(values);
  };

  const submit = form.handleSubmit(onSubmit);

  return (
    <div>
      <h2>Нативный инпут</h2>
      <input {...form.register("input")} />
      <br />
      <h2>Наш кастомный инпут</h2>
      <CustomInput label="Кастомный инпут" {...form.register("customInput")} />
      <br />
      <h2>Кастомный селект через Controller</h2>
      <Controller
        control={form.control}
        render={(props) => {
          return (
            <CustomSelect
              label="Выберете опцию"
              onChange={props.field.onChange}
              options={selectOptions}
              value={props.field.value}
            />
          );
        }}
        name="customSelect"
      />
      <button onClick={() => submit()}>Отправить</button>
    </div>
  );
};

export default TestForm;
