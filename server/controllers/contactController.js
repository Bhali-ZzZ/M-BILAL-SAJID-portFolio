import contactModel from "../models/contactModel.js";

const contact = async (req, res) => {

    const { name, email, message } = req.body;

    try {
        

        const form = new contactModel({
            name: name,
            email: email,
            message: message
        });

        // Save the new document to the database
        const contactInfo = await form.save();

        res.json({ success: true, message: "Message sent successfully" , contactInfo });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

export default contact;
