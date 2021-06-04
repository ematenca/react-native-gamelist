import React from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from "yup";
import FlatButton from '../shared/button.js';

export default function ReviewForm({addReview}) {

  const reviewSchema = yup.object({
    title: yup.string()
      .required("Este campo es requerido")
      .min(4, "Titulo debe tener mas de 4 caracteres")
      .trim("Quite los espacios en blanco del principio o del final")
      .strict(true),
    body: yup.string()
      .required("Este campo es requerido")
      .min(4, "Tipo de juego debe tener mas de 4 caracteres")
      .trim("Quite los espacios en blanco del principio o del final")
      .strict(true),
    rating: yup.string()
      .required("Este campo es requerido")
      .trim("Quite los espacios en blanco del principio o del final")
      .strict(true)
      .test('is-num-1-5', 'El puntaje del juego debe ser entre 1 y 5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
      }),
  });

  return (
    
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: ""}}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
            actions.resetForm(); 
            addReview(values);
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Titulo"
              onChangeText={props.handleChange("title")}
              onBlur={props.handleBlur("title")} 
              value={props.values.title}
            />
            <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>

            <TextInput
              multiline
              style={globalStyles.input}
              multiline
              placeholder='Tipo'
              onChangeText={props.handleChange("body")}
              onBlur={props.handleBlur("body")} 
              value={props.values.body}
            />
            <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
            
            <TextInput 
              style={globalStyles.input}
              placeholder="Puntaje (1 - 5)"
              onChangeText={props.handleChange("rating")}
              onBlur={props.handleBlur("rating")} 
              value={props.values.rating}
              keyboardType="numeric"
            />
            <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>     

            <FlatButton text='agregar juego' onPress={props.handleSubmit}  />
          </View>
        )}
      </Formik>
    </View>
    
  );
}