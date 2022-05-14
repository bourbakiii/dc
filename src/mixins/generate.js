export default{
    methods:{
        setCards({length}){
            this.cards = ()=>{
                let to_return = [];
                for(let i in length){
                    i
                    to_return.push(this.newCard());
                }
            }
        },
        newCard(){
            return Object.assign({
                id:`card-${Math.random()*100}`,
                
            }, this.getRandomType({with_params: true}));
        },
        getRandomType({with_params}){
            const RANDOM_VALUE = Math.floor(Math.random()*3);
            let to_return = {};
            console.log("Random value is");
            console.log(RANDOM_VALUE);
            switch (RANDOM_VALUE) {
                case 0: {
                    to_return.type = "enemy";
                    break;
                }
            }
            if(with_params) {
                console.log("With params");
            }
            return to_return;
        }
    }
}