import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Note(props) {
    return (
        <div className = "note">
            <h1>{props.heading}</h1>
            <p>{props.content}</p>
            <div className = "noteButtons">
                <EditIcon className = "editIcon"/>
                <DeleteIcon className = "deleteIcon"/>
            </div>
        </div>
    );
}

export default Note;