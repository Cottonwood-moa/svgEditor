'use client';

import { Excalidraw, Footer, MainMenu, Sidebar } from '@excalidraw/excalidraw';
import { useState } from 'react';

function Diagram() {
  const [docked, setDocked] = useState(false);
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <div className="absolute z-10">테스트</div>
      <Excalidraw langCode="ko-KR">
        <MainMenu>
          <MainMenu.DefaultItems.SaveAsImage />
          <MainMenu.DefaultItems.ToggleTheme />
          <MainMenu.DefaultItems.SaveToActiveFile />
          <MainMenu.DefaultItems.LoadScene />
          <MainMenu.DefaultItems.Export />
          <MainMenu.DefaultItems.ChangeCanvasBackground />
          <MainMenu.DefaultItems.ClearCanvas />
          {/* <MainMenu.Item onSelect={() => window.alert('Item2')}>
        Item 2
      </MainMenu.Item> */}
        </MainMenu>
        <Sidebar name="custom" docked={docked} onDock={setDocked}>
          <Sidebar.Header />
          <Sidebar.Tabs>
            <Sidebar.Tab tab="one">Tab one!</Sidebar.Tab>
            <Sidebar.Tab tab="two">Tab two!</Sidebar.Tab>
            <Sidebar.TabTriggers>
              <Sidebar.TabTrigger tab="one">One</Sidebar.TabTrigger>
              <Sidebar.TabTrigger tab="two">Two</Sidebar.TabTrigger>
            </Sidebar.TabTriggers>
          </Sidebar.Tabs>
        </Sidebar>
        <Footer>
          <Sidebar.Trigger
            name="custom"
            tab="one"
            style={{
              marginLeft: '0.5rem',
              background: '#70b1ec',
              color: 'white',
            }}
          >
            Toggle Custom Sidebar
          </Sidebar.Trigger>
        </Footer>
      </Excalidraw>
    </div>
  );
}

export default Diagram;
