import { ChoiceOptions } from "./styles"

export const SiderbarChoice = ({title,Icon}) => {
    return (
        <ChoiceOptions>
            {Icon && <Icon/>} {/*Si existe Icon agreguelo de lo contrario no */}
            {
                Icon ? <h4>{title}</h4> :<h5>{title}</h5>
            } {/*Si existe Icon agreguelo de lo contrario no */}
        </ChoiceOptions>
    )
}
