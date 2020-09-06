import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Ref, Watch } from 'vue-property-decorator';
@Component({})
export default class {{(name.split('/')[name.split('/').length-1]) | pascalCase}}Component extends Vue {
  @Prop() prop!: any; 
    
  @Ref('ref') readonly ref: any;
  
  @Watch(`$store`)
  watchMe(val: any) {
    console.log(val);
  }
    
  mounted() {
    console.log('hello from app');
  }
  
 set myProp(event) {
  this.$emit('update:prop', event);
  }
 get guestInfo() {
  return this.prop;
 }
}

