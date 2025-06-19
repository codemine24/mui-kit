export const sortableGridString = `import type { UniqueIdentifier } from '@dnd-kit/core';
import type { NewIndexGetter, AnimateLayoutChanges } from '@dnd-kit/sortable';

import { useState } from 'react';
import {
    arrayMove,
    useSortable,
    SortableContext,
    rectSortingStrategy,
    sortableKeyboardCoordinates,
    defaultAnimateLayoutChanges,
} from '@dnd-kit/sortable';
import {
    useSensor,
    DndContext,
    useSensors,
    MouseSensor,
    TouchSensor,
    closestCenter,
    KeyboardSensor,
    MeasuringStrategy,
} from '@dnd-kit/core';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SortableItemBase from '../components/sortable-item-base';

export function SortableGrid() {
    const createItems = Array.from({ length: 12 }, (_, index) => index + 1);

    const [items, setItems] = useState<UniqueIdentifier[]>(createItems);

    const sensors = useSensors(
        useSensor(MouseSensor),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    );

    const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

    const getIndex = (id: UniqueIdentifier) => items.indexOf(id);
    const activeIndex = activeId != null ? getIndex(activeId) : -1;

    const getNewIndex = ({
        id,
        items: currentItems,
        activeIndex: currentIndex,
        overIndex,
    }: NewIndexGetter['arguments']) =>
        arrayMove(currentItems, currentIndex, overIndex).indexOf(id)

    //  Add Item
    const handleAdd = () => {
        setItems([...items, items.length + 1]);
    };

    //  Remove Item
    const handleRemove = (id: UniqueIdentifier) => {
        const updatedItems = items.filter((item) => item !== id);
        setItems(updatedItems);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'flex-end',
                flexDirection: 'column',
                width: "100%"
            }}
        >
            <Button variant="contained" onClick={handleAdd}>
                + Add item
            </Button>

            <DndContext
                id="dnd-grid"
                sensors={sensors}
                collisionDetection={closestCenter}
                measuring={{ droppable: { strategy: MeasuringStrategy.Always } }}
                onDragStart={({ active }) => {
                    if (!active) {
                        return;
                    }

                    setActiveId(active.id);
                }}
                onDragEnd={({ over }) => {
                    setActiveId(null);

                    if (over) {
                        const overIndex = getIndex(over.id);
                        if (activeIndex !== overIndex) {
                            setItems((prev) => arrayMove(prev, activeIndex, overIndex));
                        }
                    }
                }}
            >
                <SortableContext items={items} strategy={rectSortingStrategy}>
                    <Box
                        component="ul"
                        sx={{
                            p: 0,
                            gap: 2,
                            width: 1,
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: 'repeat(2, 1fr)',
                                sm: 'repeat(4, 1fr)',
                            },
                        }}
                    >
                        {items.map((item, index) => (
                            <SortableGridItem
                                key={item}
                                id={item}
                                index={index}
                                getNewIndex={getNewIndex}
                                onRemove={() => handleRemove(item)}
                            />
                        ))}
                    </Box>
                </SortableContext>
            </DndContext>
        </Box>
    );
}

// ----------------------------------------------------------------------

const animateLayoutChanges: AnimateLayoutChanges = (args) =>
    defaultAnimateLayoutChanges({ ...args, wasDragging: true });

interface SortableItemProps {
    index: number;
    id: UniqueIdentifier;
    getNewIndex?: NewIndexGetter;
    onRemove?: () => void;
}

function SortableGridItem({ id, index, onRemove, getNewIndex }: SortableItemProps) {
    const {
        isSorting,
        transform,
        listeners,
        attributes,
        isDragging,
        setNodeRef,
        transition,
        setActivatorNodeRef,
    } = useSortable({ id, getNewIndex, animateLayoutChanges });

    return (
        <SortableItemBase
            ref={setNodeRef}
            item={id}
            data-id={id}
            data-index={index}
            onRemove={onRemove}
            stateProps={{
                listeners,
                transform,
                transition,
                sorting: isSorting,
                dragging: isDragging,
                dragOverlay: isDragging,
                handleProps: { ref: setActivatorNodeRef },
            }}
            {...attributes}
        />
    );
}
`
