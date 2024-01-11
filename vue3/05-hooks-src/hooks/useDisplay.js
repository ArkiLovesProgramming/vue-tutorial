import {ref, computed, reactive} from 'vue'

export default function(){

    const firstname = ref("arki");

    const lastname = ref("wang");

    const name = computed({
      get(){
        return firstname.value + " " + lastname.value;
      },
      set(value){
        let names = value.split(" ");
        firstname.value = names[0];
        lastname.value = names[1];
      }
    })

    console.log(name);

    const age = ref(3);

    const sayHello = function(){
      alert(`${name.value} says hi ${age.value}`);
    }

    const job = reactive({
      type: '前端工程师',
      salary: '30k',
      a: {
        b: {
          c: 1000
        }
      }
    })

    const hobby = reactive(['football', 'basketball'])

    console.log(hobby[0]);
    
    return {
      firstname,
      lastname,
      name,
      age,
      sayHello,
      job,
      hobby
    }
}