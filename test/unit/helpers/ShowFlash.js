
import FlashComponent from '../../../src/FlashComponent';

var template = `
  <div class="text-center" style="width: 600px; margin: 0 auto;">

    <h1 style="margin: 120px auto 20px auto;">{{ message }}</h1>

    <flash-message variant="danger" transitionIn="animated swing"></flash-message>

    <br><br>
    <router-link class="btn btn-primary btn-sm back-btn" to="/">Go Back Home</router-link>

  </div>
`;


export default function(config){

  return {

    components: {
      'FlashMessage': FlashComponent(config)
    },

    template,

    data(){
      return {
        message: 'In another page with flash!'
      };
    }
  };
}

