import{j as e}from"./jsx-runtime-DbX4IlF4.js";import{r as m}from"./index-sh1gF3Q4.js";import{B as i,d as c,a as s}from"./styles-BIwrkW6-.js";import"./index-DjCNa7NL.js";import"./client-CcDvwy3G.js";const B={title:"Example/BottomSheetModal",component:i,tags:["autodocs"]},t=()=>{const[o,n]=m.useState(!1),d=()=>{n(!o)};return e.jsxs(i,{visible:o,onClose:d,children:[e.jsx(c.Text,{children:"Modal"}),e.jsx(s,{children:e.jsx(s.Title,{children:"Fechar"})})]})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};var a,l,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return <BottomSheetModal visible={modalVisible} onClose={toggleModal}>
      <Text>Modal</Text>
      <Button>
        <Button.Title>Fechar</Button.Title>
      </Button>
    </BottomSheetModal>;
}`,...(r=(l=t.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const f=["Default"];export{t as Default,f as __namedExportsOrder,B as default};
