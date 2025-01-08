import { NhostClient } from '@nhost/react';

const nhost = new NhostClient({
  // subdomain: import.meta.env.VITE_NHOST_SUBDOMAIN || '',
  subdomain: "pihzieinbgskqtfshclr" ,

  // region: import.meta.env.VITE_NHOST_REGION || ''
  region: "ap-south-1"

});

export { nhost };