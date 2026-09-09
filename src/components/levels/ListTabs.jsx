import { NavLink } from 'react-router-dom';

const TABS = [
  { to: '/demons', label: 'Демоны', icon: '💀' },
  { to: '/challenges', label: 'Челленджи', icon: '🔥' },
  { to: '/impossible', label: 'Impossible List', icon: '🚫' },
  { to: '/slayers', label: 'Топ Слееров', icon: '🏆' },
  { to: '/creators', label: 'Топ Креаторов', icon: '🛠️' },
];

export default function ListTabs() {
  return (
    <div className="list-tabs">
      {TABS.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          className={({ isActive }) => `list-tab ${isActive ? 'active' : ''}`}
        >
          <span className="tab-icon">{tab.icon}</span>
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
}
