import {Schema, model} from 'mongoose'

const episodeSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    description: {
        type: String,
        require: true,
        trim: true
    },
    year: {
        type: Number,
        require: true
    },
    season: {
        ref: "Season",
        type: Schema.Types.ObjectId
    },
    status: {
        type: String,
        default: 'ACTIVE'
    },
    likeCount: {
        type: Number,
        default: 0
      },
    commentCount: {
        type: Number,
        default: 0
    },
    rateCount: {
        type: Number,
        default: 0
    },
    rateTotal: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 0
    }
},
    {
        timestamps: true,
        versionKey: false 
})


export default model('Episode',episodeSchema);