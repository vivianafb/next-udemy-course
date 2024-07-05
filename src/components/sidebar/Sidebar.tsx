import Image from 'next/image'
import React from 'react'
import { IoBrowsersOutline, IoCalculator, IoDiamondOutline, IoFootball, IoHeart, IoHeartOutline } from "react-icons/io5";
import { SidebarMenuItem } from "../../components";

const menuItems = [
    { path: '/dashboard/main', icon: <IoBrowsersOutline size={40} />, title: 'Dashboard', subtitle: 'Visualizacion de datos' },
    { path: '/dashboard/counter', icon: <IoCalculator size={40} />, title: 'Counter', subtitle: 'Contador Client Side ' },
    { path: '/dashboard/pokemons', icon: <IoFootball size={40} />, title: 'Pokemons', subtitle: 'Generacion Estatica' },
    { path: '/dashboard/favorites', icon: <IoHeartOutline size={40} />, title: 'Favoritos', subtitle: 'Global State' },

]

export const Sidebar = () => {
    return (
        <div id="menu"
            style={{ width: '400px' }}
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 ">
            <div id="logo" className="my-4 px-6">
                <h1 className="flex text-lg md:text-2xl font-bold text-white">
                    <IoDiamondOutline className='mr-2' />
                    <span>Bibi</span>
                    <span className="text-pink-500">8</span>.
                </h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>

            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image
                            width={50}
                            height={50}
                            className="rounded-full w-8 h-8"
                            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                            alt="" />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Viviana Fajardo
                    </span>
                </a>
            </div>

            <div id="nav" className="w-full px-6">
                {menuItems.map((item, index) => (
                    <SidebarMenuItem
                        key={index}
                        path={item.path}
                        icon={item.icon}
                        title={item.title}
                        subtitle={item.subtitle} />
                ))}
            </div>
        </div>
    )
}
