app.component('product-display', {
    props:{
        premium: {
            type: Boolean,
            required:true,
        }
    },
    template: 
      /*html*/ 
      `<div class="product-display">
      <div class="product-container">
          <div class="product-image">
              <img v-bind:src="image">
          </div>
          <div class="product-info">
              <h1>{{ title }}</h1>
              <p> {{ description }}</p>
              <p v-if="onSale">{{salesMessage}}</p>
              <p v-if="onSale">On Sale</p>
              <img class="img" v-else v-bind:src="osc">
              <p> Shipping: {{ shipping }}
              
              <ul>
                  <li v-for="detail in details">{{ detail }}</li>
              </ul>
              <ul>
                  <li v-for="size in sizes">{{size}}</li>
              </ul>
              <div class="select-color" > <div v-for="variant, index in variants" :key="variant.id" @click="updateVariant(index)" class="color-circle" 
                        :style="{ backgroundColor: variant.color }">
                    </div>
            </div>
             <button class="button" @click="minusFromCounter"> Remove  cart</button> 
          <button class="button" :class= "{disabledButton : !onSale}" :disabled="!onSale" @click="addToCounter"> Add to Cart</button>
          
          <review-list v-if="reviews.length" :reviews="reviews"></review-list>
          <review-form @review-submitted="addReview"></review-form>
          </div>
          
      </div>  
  </div>`,
    data() {
      return {
        product: 'Socks',
        brandName: 'AdeyKolas',
        selectedVariant: 0,
         osc: 'https://www.kindpng.com/picc/m/265-2657343_graphics-hd-png-download.png',
        //  description: 'This is a socks for sales',
         inventory:  0,
         details:['100% cotton', '30% Polyester', '10% wool', '100% Authentic Label'],
         variants: [
            {id:2342, color:'blue', image: './assets/images/blue.jpeg', quantity:0},
            {id:2343, color:'red', image: './assets/images/red.jpeg', quantity:40},
         ],
        //  sizes:['large', 'medium', 'small'],
         reviews:[],
      }
    },
    methods: {
        addToCounter(){
            this.counter += 1,
            this.$emit('add-to-counter', this.variants[this.selectedVariant].id)
        },
        minusFromCounter(){
           
            this.$emit('min-to-counter', this.variants[this.selectedVariant].id)
        },
        updateVariant(index){
            this.selectedVariant = index
        },
        addReview(review) {
            this.reviews.push(review)
          }
    },
    computed: {
        title(){
            return this.brandName + ' ' + this.product
        },
        image(){
            return this.variants [ this.selectedVariant].image
        },
        onSale(){
            return this.variants[this.selectedVariant].quantity
        },
        shipping() {
            if (this.premium) {
              return 'Free'
            }
              return 4.99
            }
    }
  })

