/* eslint-disable @typescript-eslint/no-explicit-any */

import { Excalidraw, Footer, MainMenu, Sidebar } from '@excalidraw/excalidraw';
import { Excali }
import { useEffect, useState } from 'react';
// import Library from '@excalidraw/excalidraw/types/data/library';
import LibraryItems from '../assets/sampleLibrary.json';

const UIOptions = {
  canvasActions: {
    changeViewBackgroundColor: false,
    clearCanvas: false,
  },
};

function Diagram() {
  const [docked, setDocked] = useState(false);
  const [libraryItems, setLibraryItems] = useState<any>();

  useEffect(() => {
    setLibraryItems(LibraryItems);
  }, []);

  useEffect(() => {
    console.log('하이킥 libraryItems', libraryItems);
  }, [libraryItems]);

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <div className="absolute z-10">테스트</div>
      <Excalidraw
        langCode="ko-KR"
        gridModeEnabled
        theme="dark"
        UIOptions={UIOptions}
        initialData={{
          libraryItems: libraryItems?.libraryItems,
        }}
      >
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
