import { FC, memo } from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';

type Props = {
  onClose: () => void
  isOpen: boolean
}

const MenuDrawer: FC<Props> = (props) => {
  const { onClose, isOpen } = props;

  return (
    <Drawer placement="right" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%">TOP</Button>
            <Button w="100%">ユーザー一覧</Button>
            <Button w="100%">設定</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default memo(MenuDrawer);
