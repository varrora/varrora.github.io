import del from "../assets/delete.svg";

type CheckboxProps = {
    text: string,
    checked: boolean,
    onChecked: () => void,
    onDelete: () => void
}

export default function Checkbox({ text, checked, onChecked, onDelete }: CheckboxProps) {
    return (
        <div className="group flex w-full justify-between text-primary">
            <div className="flex gap-1 my-auto items-center">
                <input id={`checkbox-${text}`} checked={checked} onChange={onChecked} className="w-6 dark:bg-black" type="checkbox" />
                <label htmlFor={`checkbox-${text}`} className="select-none">{text}</label>
            </div>
            <button className="invisible opacity-50 group-hover:visible" onClick={onDelete}>Delete</button>
        </div>
    )
}