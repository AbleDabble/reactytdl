import React from 'react';
import { Button, FormHelperText, Input, FormLabel, FormControl, FormErrorMessage, useProps } from '@chakra-ui/react';
import {Formik, Field, Form, FormikHelpers} from 'formik';
import axios from 'axios';

interface Values {
  link: string;
  setVideo: (link: string) => void;
}

export const LinkForm = (props: Values) => {
  
  // Handle state here

  return (
    <Formik
      initialValues={{link: "", setVideo: props.setVideo}}
      onSubmit={async (values: Values, actions: FormikHelpers<Values>) => {
        const res = await axios.post('/api/dlvid', {link: values["link"]});
        props.setVideo(res.data["link"]);
        }
      }
    >
    { (props: any) => (
      <Form>
        <Field name="link" placeholder="Link" >
        {({ field, form }) => (
          <FormControl isInvalid={form.errors.link && form.touched.link}>
            <FormLabel htmlFor="link">Paste youtube link here:</FormLabel>
            <Input mt={1}{...field} id="link" placeholder="Youtube Link" />
            <FormErrorMessage>{form.errors.link}</FormErrorMessage>
          </FormControl>
        )}
        </Field>
        <Button
          isLoading={props.isSubmitting}
          colorScheme="red" 
          type="submit"
          mt={4} mb={4}>Submit</Button>
      </Form>
    )}
    </Formik>
  )
} 
