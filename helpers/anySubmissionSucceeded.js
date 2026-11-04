// Waits for both delivery routes and treats the submission as successful if either one worked.
export async function anySubmissionSucceeded(emailSend, portalRequest) {
  const [email, portal] = await Promise.allSettled([emailSend, portalRequest]);

  const emailOk = email.status === 'fulfilled';
  const portalOk = portal.status === 'fulfilled' && portal.value.ok;

  if (!emailOk) console.error('EmailJS send failed:', email.reason);
  if (!portalOk) {
    console.error('Mail portal request failed:', portal.status === 'fulfilled' ? portal.value.status : portal.reason);
  }

  return emailOk || portalOk;
}
