import { Button, Card, Grid, Input, Loading, Text, Textarea } from '@nextui-org/react'
import axios from 'axios'
import  { useState, useMemo } from 'react'
import { messagesApi } from '../../api'
import { validateData } from '../../utils/validations'


export const Contact = () => {

    const [values, setValue] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [changeValue, setChangeValue] = useState(true)
    const [endData, setEndData] = useState({
        message: {
            phone: '',
            correo: ''
        }
    })

    const { name, email, message } = values

    const onInputChange = ( {target} : any) => {
        const { name, value } = target;
        setValue({
            ...values,
            [ name ]: value
        });
    }


    const helper = useMemo(() => {
        if (!email && !name && !message)
        return {
            text: "default",
            color: "default",
        };
        const { validEmail, validName, validMessage } = validateData(email, name, message);
        return {
        textEmail: validEmail ? "" : "Correo no valido",
        colorEmail: validEmail ? "success" : "error",
        textName: validName ? "" : "Nombre muy corto",
        colorName: validName ? "success" : "error",
        textMessage: validMessage ? "" : "Mensaje debe de llevar mas contenido",
        colorMessage: validMessage ? "success" : "error",
        };
    }, [email, name, message]);

    const onClick = async() => {
        
        if ( email.length < 1 || message.length < 1 || name.length < 1 ) return
        if ( helper.colorEmail === 'error' || helper.colorMessage === 'error' || helper.colorName === 'error' ) return

        setChangeValue(false)

        try {
            const {data} = await messagesApi.post('/Messages/message', { name, email, message });
            console.log({ data })
            setValue({ email: '', message: '', name: '' })
            setEndData(data)
           console.log({ endData })
            setChangeValue(true)


        } catch (error) {
            if ( axios.isAxiosError(error) ) {
                console.log({error})
            }

        }   
    }


  return (
    <Grid xs={12} sm={12} md={12} lg={12} xl={12} css={{ backgroundImage: 'url(https://res.cloudinary.com/dsii7wbi4/image/upload/v1662492530/porfolio/stacked-waves-haikei_3_dispde.png)',backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', pb: 10}}>
        <Card.Header css={{ ml: '1%'}}> <Text h1> Contactame </Text> </Card.Header>    
        <Grid.Container gap={1} xs={12} sm={6} md={6} lg={6} xl={6} justify='flex-end' css={{ backgroundColor: '#16181a', m: '0% 0% 0% auto'}}>
            <Grid css={{ p: 10}} >
                
                    <Input 
                        css={{ mr: 30, mb: 20}} 
                        clearable 
                        bordered 
                        label="Nombre" 
                        placeholder="Guillermo Rauch" 
                        name="name"
                        status={helper.colorName as any}
                        color={ helper.colorName as any }
                        helperColor={helper.colorName as any}
                        value={name}
                        onChange={onInputChange}
                        helperText={helper.textName }
                    />
                    <Input 
                        css={{ mr: 100, mb: 20}} 
                        clearable 
                        bordered 
                        label="Correo " 
                        placeholder="correo@example.com"
                        name="email"
                        value={email}
                        onChange={onInputChange}
                        status={helper.colorEmail as any}
                        color={ helper.colorEmail as any }
                        helperColor={helper.colorEmail as any}
                        type="email"
                        helperText={helper.textEmail }
                    />
                    <Textarea 
                        minRows={10}
                        maxRows={15}
                        css={{ width: 250}}
                        bordered
                        label="Mensaje" 
                        placeholder="Dejame un mensaje aqui"
                        name="message"
                        status={helper.colorMessage as any}
                        color={ helper.colorMessage as any }
                        helperColor={helper.colorMessage as any}
                        value={message}
                        onChange={onInputChange}
                        helperText={helper.textMessage }
                    />
                    {
                        ( endData.message.correo.length > 1 )
                            ?  <Grid> 
                                <Text css={{ color: '$gray600'}}>Gracias por contactarme te dejo mas informaciòn de contacto </Text> 
                                <Text> Correo: <span style={{ color: 'green'}}>{ endData.message.correo}</span>  </Text> 
                                <Text> Telefono: <span style={{ color: 'green'}}>{ endData.message.phone}</span> </Text>
                            </Grid>
                            :<Button 
                                css={{ m: '20px 100px 0px 0px'}} 
                                auto 
                                color="secondary" 
                                size="md"  
                                onClick={onClick}
                                disabled={ !changeValue }
                            > 
                                {
                                    ( !changeValue ) 
                                        ?  <Loading color="primary" size="sm" />                            
                                        :  <> {'Enviar'} </>
                                }    
                            </Button>
                    }
                    
                
            </Grid>
        </Grid.Container>
    </Grid>  
  )
}
