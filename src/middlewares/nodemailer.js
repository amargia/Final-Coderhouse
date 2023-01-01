import { createTransport } from "nodemailer";

const EMAIL = process.env.EMAIL
const PASSWORD = process.env.PASSWORD

const transporter = createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: EMAIL,
        pass: PASSWORD,
    }
});

//función para enviar mail
const sendMail = async (data) => {
    const mailOptions = {
        from: 'Final Backend Ale',
        to: EMAIL,
        subject: 'Nuevo registro',
        text: 'Hola gente',
        html: `<h1 style="color: blue;">Se ha registrado un nuevo usuario con username: ${data.username} y mail: ${data.email}</h1>`
    }
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.log(error);
    }
}

//función para enviar correos por nueva compra
const sendMailPurchase = async (data) => {
    const usuario = data.username;
    const mail = data.email;
    const productos = data.products;
    const arrayProductos = productos.map(el => {
        return {
            producto: el.name,
            precio: el.price,
            cantidad: el.quantity
        }
    });

    const mailContent = {
        from: 'Backend Ale',
        to: mail,
        subject: 'Nueva compra',
        text: 'Hola gente',
        html: `<h1 style="color: blue;">Se ha realizado una nueva compra por parte de ${usuario} con mail: ${mail}</h1>
        <h2>Los productos comprados son: ${arrayProductos}</h2>`
    }
    try {
        const info = await transporter.sendMail(mailContent);
        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.log(error);
    }
}

const notificacion = async (data) => {
    const user = data.username;
    const mail = data.email;
    const arrayProductos = data.products.map(el => {
        return {
            producto: el.name,
            precio: el.price,
            cantidad: el.quantity
        }
    });

    const mailContent = {
        from: 'Backend Ale',
        to: EMAIL,
        subject: 'Nueva compra',
        text: 'Hola gente',
        html: `<h1 style="color: blue;">Se ha realizado una nueva compra por parte de ${user} con mail: ${mail}</h1>
        <h2>Los productos comprados son: ${arrayProductos}</h2>`,
    };
    try {
        const info = await transporter.sendMail(mailContent);
        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.log(error);
    }
}

export { sendMail, sendMailPurchase, notificacion };