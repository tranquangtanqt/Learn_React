import './index.scss';

const Textarea = (props) => {

    const handleChange = () => { };
    
    return (
        <>
            <textarea className="boxsizing-border"  name="textarea" value={props.value} onChange={handleChange} />
        </>
    )
};

export default Textarea;