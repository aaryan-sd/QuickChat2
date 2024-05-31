import mongoose from "mongoose";

const ConversationSchema = new mongoose.Schema({
    participant: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: []
        }
    ]
})

const Conversation = mongoose.model("Conversation", ConversationSchema);

export default Conversation;