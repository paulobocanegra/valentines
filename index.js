class Love {
    constructor(){
        this.root = document.getElementById("root")
        this.memories = []
        this.getMemories()
        this.populate = this.populate.bind(this)
        
    }

    async getMemories(){
        const res = await fetch("./events.json")
        const data = await res.json()
        this.memories = Object.values(data)
        this.populate()
    }

    populate(){
        this.memories.forEach((memory, idx) => {
            const div = document.createElement("div")
            const img = document.createElement("img")
            img.src = `https://ale-valentines.s3.us-west-1.amazonaws.com/${idx+1}.jpeg`
            div.className = "card"
            const h3 = document.createElement("h3")
            h3.innerHTML = memory.event
            const p = document.createElement("p")
            p.innerText = memory.details
            div.appendChild(img)
            div.appendChild(h3)
            div.appendChild(p)
            this.root.appendChild(div)
        });
    }
}

const data = new Love()