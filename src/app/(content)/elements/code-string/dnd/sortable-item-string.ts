export const sortableItemString = `import { memo, useEffect } from 'react';
import { alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DragIcon from '@mui/icons-material/DragIndicator';
import Box from '@mui/material/Box';
import type { Transform } from '@dnd-kit/utilities';
import type { Theme, SxProps } from '@mui/material/styles';
import type { UniqueIdentifier, DraggableSyntheticListeners } from '@dnd-kit/core';


type ItemBaseProps = React.ComponentProps<'div'> & {
    ref?: (node: HTMLElement | null) => void;
    sx?: SxProps<Theme>;
    item: UniqueIdentifier;
    onRemove?: () => void;
    stateProps?: {
        sorting?: boolean;
        dragging?: boolean;
        dragOverlay?: boolean;
        transition?: string | null;
        transform?: Transform | null;
        listeners?: DraggableSyntheticListeners;
        handleProps?: any;
    };
};

function ItemBase({ item, stateProps, onRemove, ref, sx, ...other }: ItemBaseProps) {

    useEffect(() => {
        if (!stateProps?.dragOverlay) return;
        document.body.style.cursor = 'grabbing';
        return () => {
            document.body.style.cursor = '';
        };
    }, [stateProps?.dragOverlay]);

    const isOverlay = stateProps?.dragOverlay;
    const isDragging = stateProps?.dragging;

    return (
        <Box
            ref={ref}
            component="li"
            className={isOverlay ? 'is-overlay' : ''}
            sx={{
                flexShrink: 0,
                display: 'flex',
                transform: \`translate3d(\${Math.round(stateProps?.transform?.x || 0) } px, \${Math.round(stateProps?.transform?.y || 0) } px, 0) scaleX(\${stateProps?.transform?.scaleX ?? 1}) scaleY(\${stateProps?.transform?.scaleY ?? 1})\`,
                transformOrigin: '0 0',
                touchAction: 'manipulation',
                zIndex: isOverlay ? 999 : 'auto',
                transition: stateProps?.transition ?? undefined,
                ...sx,
            }}
        >
            <Box
                {...other}
                sx={
                    (theme) => {
                        const isDarkMode = theme.palette.mode === 'dark';

                        return {
                            ...theme.typography.h2,
                            width: '100%',
                            outline: 'none',
                            overflow: 'hidden',
                            textAlign: 'center',
                            position: 'relative',
                            transformOrigin: '50% 50%',
                            touchAction: 'manipulation',
                            padding: theme.spacing(5, 0),
                            WebkitTapHighlightColor: 'transparent',
                            borderRadius: theme.shape.borderRadius * 2,
                            transition: theme.transitions.create(['box-shadow']),
                            color: alpha(theme.palette.text.disabled, 0.24),
                            backgroundColor: alpha(theme.palette.grey[500], 0.04),
                            border: \`solid 1px \${alpha(theme.palette.grey[500], 0.16) }\`,

                            ...(isOverlay && {
                                backdropFilter: 'blur(6px)',
                                color: theme.palette.text.primary,
                                backgroundColor: isDarkMode
                                    ? alpha(theme.palette.grey[900], 0.48)
                                    : alpha(theme.palette.common.white, 0.48),
                            }),

                            ...(isDragging && {
                                opacity: 0.24,
                                backgroundColor: alpha(theme.palette.grey[500], 0.12),
                            }),

                            '&:hover .remove-btn': {
                                opacity: 0.48,
                            },

                            '.remove-btn': {
                                opacity: 0,
                                transition: theme.transitions.create(['opacity']),
                            },
                        };
                    }
                }
            >
                {item}
                <Box
                    sx={{
                        top: 6,
                        right: 6,
                        zIndex: 9,
                        display: 'flex',
                        position: 'absolute',
                    }}
                >
                    <IconButton
                        className="remove-btn"
                        disableRipple
                        disableFocusRipple
                        disableTouchRipple
                        size="small"
                        onClick={onRemove}
                    >
                        <CloseIcon />
                    </IconButton>

                    <IconButton
                        disableRipple
                        disableFocusRipple
                        disableTouchRipple
                        size="small"
                        {...stateProps?.handleProps}
                        {...stateProps?.listeners}
                    >
                        <DragIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
}

export default memo(ItemBase);
`