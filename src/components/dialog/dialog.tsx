import React from 'react';
import {Avatar, Name, Text, Details, Item, Badge} from "./style-components";

interface DialogProps {
    src: string,
    name: string,
    message: string,
    unread: number | null
}

const Message = ({src, name, message, unread}: DialogProps) => {
    return (
        <Item>
            <Avatar src={src}/>
            <Details>
                <Name>{name}</Name>
                <Text>{message}</Text>
            </Details>
            <Badge count={unread}/>
        </Item>
    );
};

export default Message;