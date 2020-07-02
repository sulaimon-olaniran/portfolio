import React from 'react'
import './Contact.css'
import { withFormik, Form, Field } from 'formik'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import ScrollAnimation from 'react-animate-on-scroll'
import emailjs from 'emailjs-com'
import * as yup from 'yup'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import { green } from '@material-ui/core/colors'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
    fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}))



const Contact = ({ touched, errors, isSubmitting, status }) => {
    const classes = useStyles()

    const buttonClassname = clsx({
        [classes.buttonSuccess]: status,
    })
    return (
        <div className="contact-container" >
            <ScrollAnimation animateIn="tada" ><h1>Contact <span className="style-word-span" >Me</span></h1></ScrollAnimation>
            <ScrollAnimation animateIn="bounceInUp" duration={1.1} >
                <Form>
                    <h3>Say Hello <span role="img" aria-label="tongouee" className="wave-icon" >👋</span></h3>
                    <Field as={TextField} type="text" name="name" label="Your name"
                        error={touched.name && errors.name ? true : false}
                        helperText={touched.name ? errors.name : null}

                    />

                    <Field as={TextField} type="email" name="email" label="Your email"
                        error={touched.email && errors.email ? true : false}
                        helperText={touched.email ? errors.email : null}
                    />

                    <Field as={TextField} type="text" name="message" label="Your message" variant="outlined"
                        error={touched.message && errors.message ? true : false}
                        helperText={touched.message ? errors.message : null}
                    />

                <div className={classes.wrapper}>
                    <Field type="submit" as={Button} variant="contained" color="secondary" disabled={status}
                    className={buttonClassname}
                    >
                        Send <SendIcon />
                    </Field>
                    {status && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>

                </Form>
            </ScrollAnimation>
        </div>
    )
}

const FormikContact = withFormik({
    mapPropsToValues() {
        return {
            name: "",
            email: "",
            message: ""
        }
    },

    validationSchema: yup.object().shape({
        name: yup.string().required("Please tell me your name."),

        email: yup.string()
            .email('Invalid email')
            .required('Email is Required'),

        message: yup.string().required("What's your message ?")
    }),

    handleSubmit(values, { resetForm, setSubmitting, setStatus }) {
        setStatus(true)
        console.log(values)
        const templatedId = "portfolio"
        const serviceId = "default_service"
        const userId = "user_KHVompyz6Bjkqit10kCMV"
        console.log(values)
        emailjs.send( serviceId, templatedId, values, userId)
        .then(() =>{
            resetForm({})
            setSubmitting(false)
            setStatus(false)
        })
        .catch(error =>{
            console.log("error occured")
            setSubmitting(false)
        })
    }
})(Contact)


export default FormikContact