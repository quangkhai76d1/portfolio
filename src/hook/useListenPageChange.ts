import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {scrollingSelector} from '../store/globalSlice';
import {ANIM_DURATION} from '@/config/constants';

export const useListenPageChange = (onNextPage: () => void, onPrevPage: () => void, animDuration = ANIM_DURATION) => {
  const scrolling = useSelector(scrollingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleChangePage = (next?: boolean) => {
      if (!scrolling) {
        if (next) {
          onNextPage();
        } else {
          onPrevPage();
        }
      }
    };

    const handleWheel = (e: WheelEvent) => {
      const delta = Math.max(-1, Math.min(1, e.deltaY || -e.detail));
      handleChangePage(delta > 0);
    };

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        handleChangePage(true);
      } else {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          handleChangePage(false);
        }
      }
    };

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [onNextPage, onPrevPage, animDuration, dispatch, scrolling]);
};
