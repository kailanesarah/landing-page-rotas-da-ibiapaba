import "../css/components/label.css";
const LabelComponent = ({text}) => {
    return ( 
        <h6 className="label-component text-white">
            {text}
        </h6>
     );
}
 
export default LabelComponent;