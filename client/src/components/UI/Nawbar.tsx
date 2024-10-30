import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import VideocamIcon from '@mui/icons-material/Videocam';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import Collapse from '@mui/material/Collapse';
import { Link } from 'react-router-dom';  
import { ExpandLess, ExpandMore } from '@mui/icons-material';

interface MenuItem {
  text: string;
  icon: JSX.Element;
  link?: string;
  children?: MenuItem[]; // Дочерние элементы для выпадающего списка
}

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(false); // Контролирует выпадающее меню

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const toggleSettings = (event: React.MouseEvent) => {
    event.stopPropagation(); // Предотвращает закрытие Drawer при клике на выпадающее меню
    setSettingsOpen(!settingsOpen);
  };

  // Массив с пунктами меню, иконками и ссылками
  const menuItems: MenuItem[] = [
    { text: 'Участки', icon: <VideocamIcon />, link: '/location' },
    { text: 'События', icon: <MailIcon />, link: '/' },
    { text: 'Архив', icon: <InboxIcon />, link: '/' },
  ];

  const secondaryItems: MenuItem[] = [
    {
      text: 'Настройки', 
      icon: <SettingsIcon />, 
      children: [ // Дочерние элементы выпадающего списка
        { text: 'Камеры', icon: <VideocamIcon />, link: '/addingCameras' },
        { text: 'Пользователи', icon: <VideocamIcon />, link: '/addingUsers' },
        { text: 'Сотрудники', icon: <VideocamIcon />, link: '/addingEmployee' },
      ]
    },
    { text: 'Аккаунт', icon: <ManageAccountsIcon />, link: '/account' },
  ];

  const DrawerList = (
    <Box
      sx={{ 
        width: 250, 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%',
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.link || '#'}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {secondaryItems.map((item) => (
          <div key={item.text}>
            {item.children ? (
              <>
                <ListItemButton onClick={toggleSettings}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                  {settingsOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={settingsOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.children.map((child) => (
                      <ListItemButton
                        key={child.text}
                        sx={{ pl: 4 }}
                        component={Link}
                        to={child.link || '#'}
                      >
                        <ListItemText primary={child.text} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              <ListItemButton component={Link} to={item.link || '#'}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            )}
          </div>
        ))}
      </List>
     
      <Box sx={{ marginTop: 'auto' }}>
        <Divider />
        <List>
          <ListItem key="auth" disablePadding>
            <ListItemButton component={Link} to="/auth">
              <ListItemIcon><LogoutIcon /></ListItemIcon>
              <ListItemText primary="Выйти" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)} color="inherit">
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
