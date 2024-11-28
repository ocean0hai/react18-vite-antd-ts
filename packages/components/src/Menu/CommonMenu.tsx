import { Menu } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export interface CommonMenuItem {
  key: string
  icon: React.ReactNode
  label: string
  path?: string
}

export interface CommonMenuProps {
  items: CommonMenuItem[]
  mode?: 'vertical' | 'horizontal' | 'inline'
  theme?: 'light' | 'dark'
}

export const CommonMenu: React.FC<CommonMenuProps> = ({
  items,
  mode = 'inline',
  theme = 'dark',
}) => {
  const location = useLocation()
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  useEffect(() => {
    const currentPath = items.find(item => item.path === location.pathname)?.key
    if (currentPath) {
      setSelectedKeys([currentPath])
    }
  }, [location, items])

  const menuItems = items.map(item => ({
    key: item.key,
    icon: item.icon,
    label: item.path ? <Link to={item.path}>{item.label}</Link> : item.label,
  }))

  return (
    <Menu
      items={menuItems}
      selectedKeys={selectedKeys}
      mode={mode}
      theme={theme}
    />
  )
}
