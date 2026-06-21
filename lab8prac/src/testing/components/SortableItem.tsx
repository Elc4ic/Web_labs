import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { ListItem, ListItemText, ListItemButton, ListItemIcon } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

interface SortableItemProps {
    item: string;
}

export function SortableItem({ item }: SortableItemProps) {
    const id = item;
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <ListItem ref={setNodeRef} style={style} {...attributes} {...listeners} sx={{ p: 0, mb: 1 }}>
            <ListItemButton
                sx={{
                    border: '1px solid gray',
                    borderRadius: '5px',
                    bgcolor: 'white'
                }}
            >
                <ListItemIcon sx={{ minWidth: '40px' }}>
                    <DragIndicatorIcon />
                </ListItemIcon>
                <ListItemText primary={item} />
            </ListItemButton>
        </ListItem>
    );
}