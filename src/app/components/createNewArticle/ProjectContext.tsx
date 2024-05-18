'use client';

import {createContext} from 'react';

const ProjectContext = createContext<string | undefined>(undefined);

export default ProjectContext;
