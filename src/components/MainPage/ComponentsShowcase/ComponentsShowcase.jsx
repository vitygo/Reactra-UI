import './ComponentsShowcase.css'
import './ComponentCard.css'
import './ComponetsStyles.css'
import { FaSearch } from "react-icons/fa";
import React, {useState} from 'react'

const uiComponentsСategories = [
    {
      id: 1,
      category: "Core UI Components",
      subcategories: [
        { id: 101, name: "Buttons", posterComponent: <PrimaryButton/>},
        { id: 102, name: "Badges / Labels / Tags", posterComponent: <DefaultBadge/>},
        { id: 103, name: "Icons" , posterComponent: 'none'},
        { id: 104, name: "Avatars / Profile Pictures", posterComponent: <AvatarWidthText/>},
        { id: 105, name: "Images / Thumbnails", posterComponent: 'none'}
      ]
    },
    {
      id: 2,
      category: "Forms & Inputs",
      subcategories: [
        { id: 201, name: "Input Fields / Text Inputs", posterComponent: <SearchInput/>},
        { id: 202, name: "Textareas", posterComponent: 'none'},
        { id: 203, name: "Checkboxes", posterComponent: 'none'},
        { id: 204, name: "Radio Buttons", posterComponent: 'none'},
        { id: 205, name: "Select / Dropdowns", posterComponent: 'none'},
        { id: 206, name: "Switches / Toggles", posterComponent: 'none'},
        { id: 207, name: "Sliders", posterComponent: 'none'},
        { id: 208, name: "Date / Time Pickers", posterComponent: 'none'},
        { id: 209, name: "Form Validation / Error Messages", posterComponent: 'none'}
      ]
    },
    {
      id: 3,
      category: "Navigation",
      subcategories: [
        { id: 301, name: "Navbar / Header", posterComponent: <BasicNavbar/>},
        { id: 302, name: "Sidebar / Drawer", posterComponent: 'none'},
        { id: 303, name: "Breadcrumbs", posterComponent: 'none'},
        { id: 304, name: "Pagination", posterComponent: 'none'},
        { id: 305, name: "Tabs" , posterComponent: 'none'},
        { id: 306, name: "Menus / Dropdown Menus", posterComponent: 'none'},
        { id: 307, name: "Steps / Progress Steps", posterComponent: 'none'}
      ]
    },
    {
      id: 4,
      category: "Layout & Display",
      subcategories: [
        { id: 401, name: "Cards", posterComponent: 'none'},
        { id: 402, name: "Modals / Dialogs", posterComponent: 'none'},
        { id: 403, name: "Tooltips", posterComponent: 'none'},
        { id: 404, name: "Popovers", posterComponent: 'none'},
        { id: 405, name: "Accordions / Collapse", posterComponent: 'none'},
        { id: 406, name: "Alerts / Notifications", posterComponent: 'none'},
        { id: 407, name: "Toasts", posterComponent: 'none'},
        { id: 408, name: "Tables / Data Grids", posterComponent: 'none'},
        { id: 409, name: "Lists / List Groups", posterComponent: 'none'},
        { id: 410, name: "Grids / Flex Layouts", posterComponent: 'none'}
      ]
    },
    {
      id: 5,
      category: "Media & Content",
      subcategories: [
        { id: 501, name: "Images / Media Objects", posterComponent: 'none'},
        { id: 502, name: "Avatars", posterComponent: 'none'},
        { id: 503, name: "Carousels / Sliders", posterComponent: 'none'},
        { id: 504, name: "Badges", posterComponent: 'none'}
      ]
    },
    {
      id: 6,
      category: "Miscellaneous / Utility Components",
      subcategories: [
        { id: 601, name: "Progress Bars", posterComponent: 'none'},
        { id: 602, name: "Spinners / Loaders", posterComponent: 'none'},
        { id: 603, name: "Tags / Chips", posterComponent: 'none'},
        { id: 604, name: "Dividers / Separators", posterComponent: 'none'},
        { id: 605, name: "Footers", posterComponent: 'none'}
      ]
    }
  ];
  




export default function ComponentsShowcase(){

    const [isOpen, setIsOpen] = useState(false);

    return(
        <section className="components-showcase-section">
            <h2 className="components-showcase-section__title"><span>Explore</span> the Components</h2>
            <p className="components-showcase-section__text">Browse our library of ready-to-use React components. Click any component to see a live demo and code examples, so you can quickly integrate them into your project</p>
            <div className={`components-showcase-section__components-grid ${isOpen ? 'open' : ''}`}>
                {uiComponentsСategories.map(section => {
                   return section.subcategories.map(category => {
                       return <ComponentCard key={category.id} name={category.name} posterComponent={category.posterComponent}/>
                    })

                })}
                

            </div>
            <button className="expand-btn" onClick={() => setIsOpen(prev => !prev)}>{`${isOpen ? 'Show less' : 'Show more'}`}</button>
            
        </section>
    );
}

export function ComponentCard({name, posterComponent}){
    return(
        <div className="component-card">
            <div className="card__header">
                <h4>{name}</h4>
            </div>
            <div className="card__body">
               {posterComponent}
            </div>
            
            </div>
    )
}


export function PrimaryButton(){
    return(
        <button className="primary__button">Button</button>
    );
   

}

export function DefaultBadge(){
    return(
        <div className="default__badge">Badge</div>
    );
   

}

export function BasicNavbar(){
    return(
        <div className="basic__navbar">
            <div className="navbar__logo">
                LOGO
            </div>
            <ul>
                <li>link</li>
                <li>link</li>
                <li>link</li>
                <li>link</li>
            </ul>
            
        </div>
    );
   

}

export function AvatarWidthText(){
    return(
        <div className="avatar-width-text">
            <img className='avatar-width-text__image' src='./prfilepic1.png' alt=''/>
            <div className="avatar-width-text__text-container">
                <p className="text-container__title">James McGill</p>
                <p className="text-container__text">Python developer</p>

                
            </div>

        </div>
    );
   

}

export function SearchInput(){
    return(
        <div className="search-input-container">
            <input placeholder='Search React Component'/>
            <FaSearch size="20px"/>
        </div>
    );
   

}