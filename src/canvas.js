/** 
 * Package used => Canvacord
*/

const Discord = require("discord.js")
const canvacord = require("canvacord");

/**
 * @param {Discord.Message} message
 * @param {import('../index').canvas_options} options
 */

async function canvas(message,options){
    if(message.author.bot) return
    if(options && options.toggle === false) return
    const array_1 = ["affect", "beautiful", "wanted", "delete", "trigger", "facepalm", "blur", "hitler", "jail", "invert", "jokeOverHead"]  
    const array_2 = ["bed", "fuse" , "kiss", "slap", "spank"]
    const array_3 = ["distracted"]
    const array_4 = ["changemymind"]
    if(options && array_1.includes(options.type)){   
    const image1 = options.image_1
    if(!image1) throw new Error("Missing parameters (Most prolly image URL)")
    const image = await canvacord.Canvas[options.type](image1);
    return image 
    }else if(options && array_2.includes(options.type)){
    const image1 = options.image_1
    const image2 = options.image_2
    if(!image1 || !image2) throw new Error("Missing parameters (Most prolly image URL)")
    const image = await canvacord.Canvas[options.type](image1,image2)
    return image
    }
    else if(options && array_3.includes(options.type)){
        const image1 = options.image_1
        const image2 = options.image_2        
        const image3 = options.image_3
        if(!image1 || !image2 || !image3) throw new Error("Missing parameters (Most prolly image URL)")
        const image = await canvacord.Canvas[options.type](image1,image2, image3)
        return image
        }
    else if(options && array_4.includes(options.type)){
        const text = options.text
        if(!text) throw new Error("Missing parameters (Most prolly text)")
        const image = await canvacord.Canvas[options.type](text)
        return image
    }else{
        throw new Error("Invalid Type")
    }

}
