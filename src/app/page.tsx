"use client";
import { CheckBoxForm } from "@/components/ExampleForms/CheckBoxForm";
import { InputForm } from "@/components/ExampleForms/InputForm";
import { PinForm } from "@/components/ExampleForms/PinForm";
import { RadioForm } from "@/components/ExampleForms/RadioForm";
import { SelectForm } from "@/components/ExampleForms/SelectForm";
import { SliderForm } from "@/components/ExampleForms/SliderForm";
import { SwitchForm } from "@/components/ExampleForms/SwitchForm";
import { TextareaForm } from "@/components/ExampleForms/TextareaForm";
import { Center, Text, Divider } from "@chakra-ui/react";
import { Fragment } from "react";

export default function Home() {
  const Forms = [
    <InputForm />,
    <CheckBoxForm />,
    <PinForm />,
    <RadioForm />,
    <SelectForm />,
    <TextareaForm />,
    <SwitchForm />,
    <SliderForm />,
  ];

  return (
    <Center as="main" flexDir={"column"} gap={"24px"}>
      <Text>
        Creating infrastructure to integrate chakra ui, react hook form, react
        query and axios
      </Text>

      {Forms.map((form, index) => (
        <Fragment key={index}>
          {form}
          <Divider />
        </Fragment>
      ))}
    </Center>
  );
}
