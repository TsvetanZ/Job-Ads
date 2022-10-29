const { Schema, model, Types } = require ('mongoose');


const URL_PATTERN = /^https?:\/\/.+$/i; 

const adSchema = new Schema ({
    headline: {type: String, minlength: [4, 'The headline should be at least 4 characters'] },
    /*imageUrl: {
        type: String,
         validate: {
            validator: (value) => URL_PATTERN.test(value), 
            message: 'Image URL is not valid'
        }
    },*/
    location: {type: String, minlength: [8, 'The location should be at least 8 characters'] },
    companyName: {type: String, minlength: [3, 'The Company name should be at least three characters'] },
    description: {
        type: String, required: true,
        // minlength:[10, 'Description must at least 10 characters long']
         maxlength:[40, 'Course description must at most 40 characters long']
    },
    
    //paymentMethod: {type: String, required: true, enum: {
    //    values: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal' ],
    //    message: 'Payment method is not valid'
    //}},
    //duration: {type: String, required: [true, 'Duration is required']},
    //createAdt:{type: String, required: true, default: () => (new Date()).toISOString().slice(0, 10)}, 
    users: { type: [Types.ObjectId], ref: 'User', default: [] },
    //userCount: {type: Number, default: 0 },
    owner: { type: Types.ObjectId, ref: 'User'}
});

//adSchema.index ({name: 1}, {
//    collation: {
//        locale: 'en',
//        strength: 2
//    }
//});

const Ad = model ('Ad', adSchema);

module.exports = Ad;
