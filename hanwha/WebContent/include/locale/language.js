$(document).ready(function(){
	i18next.on('languageChanged', updateContent);
	  
	$(".languageButton").click(
			function() {
				i18next.changeLanguage(
						$(this).val()
				);
			}
	);
	
	i18next.init({
		fallbackLng: $("#language").val(),
		resources: { 
			"en-US": {
				translation: {
					login:{
						save_id: 'Remember me',
						login: 'Log in',
						register: 'Sign Up'
					},
					errNotiMsg:{
						msg_title: 'Results',
						msg_content_0: 'Session terminated.\n Please try again in a moment',
						msg_content_1: 'The requested URL information is not available.',
						msg_content_2: 'The requested data information is not available.',
						msg_content_3: 'The ID or Password is incorrect.',
						msg_content_4: 'The IP is not allowed.',
						msg_content_5: 'DB error.<br>Please try again later.',
						msg_content_6: 'You are not logged in.',
						msg_content_7: 'The license is not valid.',
						msg_content_8: 'No data found.',
						msg_content_9: 'A temporary error has occurred.<br>Please try again later.',
						msg_content_10: 'Please check the information you entered.',
						msg_content_11: 'No mail source found.',
						msg_content_12: 'IP format is not correct. Please check again.',
						msg_content_13: 'A temporary error has occurred.<br>Please try again later.',
						msg_content_14: 'URL format is not valid.<br>Please check again.',
						msg_content_17: 'Recipient information does not match.',
						msg_success_title: 'Success',
						msg_success_content_0: 'Removed.',
						msg_success_content_1: 'Backed up.'
					},
					leftmenu:{
						dashboard: 'Dashboard',
						monitoring: 'Monitoring',
						mail_monitoring: 'Mail Monitoring',
						mail_list: 'Mail List',
						event_monitoring: 'Event Monitoring',
						service_monitoring: 'Service Monitoring',
						log_monitoring: 'Log Monitoring',
						queue_monitoring: 'Queue Monitoring',
						system_monitoring: 'System Monitoring',
						statistics: 'Statistics',
						policy_manager: 'Policy Management',
						spam_policy: 'Spam Policy',
						virus_policy: 'Malware Policy',
						cdr_policy: 'CDR Policy',
						url_policy: 'URL Harmfulness Policy',
						isolation_policy: 'Document isolation Policy',
						preferences: 'Preferences',
						domain_preference: 'Domains',
						autoDelete_preference: 'Auto-delete',
						smtp_preference: 'SMTP',
						config_preference: 'CONFIG',
						notices_preference: 'Notification',
						admin_preference: 'Administrator',
						user_preference: 'User/Organization',
						equipment_preference: 'Equipment',
						product_information: 'Product Info',
						
						mail_body_policy: 'Body of Mail Policy',
						attached_file_policy: 'The attached file Policy',
						cdr_detail_policy: 'CDR Detail Policy'
					},
					header:{
						notice: 'Notification',
						admin: 'Administrator',
						connect_country: 'Location',
						connect_ip: 'IP',
						connect_time: 'Last logged in'
					},
					logout:{
						header: 'Log Out',
						msg: 'Are you sure you want to log out?',
						apply: 'Yes',
						cancel: 'No'
					},
					dashboard:{
						help: '  Dashboard displays at-a-glance views of overall status.',
						location: 'Dashboard',
						system_usage: 'System Status',
						system_usage_cpu: 'CPU',
						system_usage_memory: 'Memory',
						system_usage_disk: 'Storage',
						system_usage_networkRx: 'Downstream (bps)',
						system_usage_networkTx: 'Upstream (bps)',
						system_usage_cpu_warning_noti: '[CPU Usage] Warning Threshold',
						system_usage_cpu_danger_noti: '[CPU Usage] Critical Threshold',
						system_usage_memory_warning_noti: '[Memory Usage] Warning Threshold',
						system_usage_memory_danger_noti: '[Memory Usage] Critical Threshold',
						system_usage_disk_warning_noti: '[Storage Usage] Warning Threshold',
						system_usage_disk_danger_noti: '[Storage Usage] Critical Threshold',
						system_usage_networkRx_warning_noti: '[Downstream Ratio] Warning Threshold',
						system_usage_networkRx_danger_noti: '[Downstream Ratio] Critical Threshold',
						system_usage_networkTx_warning_noti: '[Upstream Ratio] Warning Threshold',
						system_usage_networkTx_danger_noti: '[Upstream Ratio] Critical Threshold',
						system_usage_anynoti: '% exceeded',
						abatement: 'Threats Protection',
						abatement_division: 'Period', //181012
						abatement_spam: 'Spam',
						abatement_virus: 'Malware',
						abatement_cdr: 'CDR',
						abatement_normal: 'Normal',
						abatement_today: 'Today',
						abatement_integrated: 'Total',
						amountOfSendRecv: 'Mail Round-trip',
						amount_division: 'Period', //181012
						amount_send: 'Outgoing',
						amount_recv: 'Incoming',
						amount_send_recv: 'Internal',
						amount_relay: 'Relay',
						sender_top5: 'Top 5 Sender',
						sender_no: 'No.',
						sender_title: 'Sender',
						sender_count: 'Count',
						sender_domain_top5: 'Top 5 Sender Domain',
						sender_domain_no: 'No.',
						sender_domain_title: 'Domain',
						sender_domain_count: 'Count',
						sender_domain_no_title: 'No Sender Domain',
						sender_country_top5: 'Top 5 Sender Country',
						sender_country_no: 'No.',
						sender_country_title: 'Country',
						sender_country_count: 'Count',
						recver_top5: 'Top 5 Recipient',
						recver_no: 'No.',
						recver_title: 'Recipient',
						recver_count: 'Count',
						recver_domain_top5: 'Top 5 Recipient Domain',
						recver_domain_no: 'No.',
						recver_domain_title: 'Domain',
						recver_domain_count: 'Count',
						recver_domain_no_title: 'No Recipient Domain',
						graph_send: 'Outgoing',
						graph_recv: 'Incoming',
						graph_rs: 'Internal',
						graph_relay: 'Relay',
						graph_spam: 'Spam',
						graph_virus: 'Malware',
						graph_cdr: 'CDR',
						graph_normal: 'Normal',
						graph_integrated: 'Total'
					},
					maillist: {
						help: '  Monitoring overall mail round-trip and its protection status, also quickly searching emails via specific keywords.',
						location_1depth: 'Monitoring',
						location_2depth: 'Mail Monitoring',
						total: 'All',
						count: 'Result(s)',
						search_select_term: 'Date Range',
						search_sender: 'Sender',
						search_recver: 'Recipient',
						search_title: 'Title',
						search_file: 'Attachment',
						search_mail_process: 'Search Options',
						search_sent_type: 'Types',
						search_sent_type_send: 'Outgoing',
						search_sent_type_recv: 'Incoming',
						search_sent_type_rs: 'Internal',
						search_sent_type_relay: 'Relay',
						search_sent_type_mirror: 'Mirroring',
						search_final_stat: 'Account', //181012
						search_sender_unknown: 'Invalid Sender',
						search_receiver_unknown: 'Invalid Recipient',
						search_relay_deny: 'Relay Denied',
						search_success_delivery_temp: 'Delivery Succeeded', //181012
						search_err_delivery_temp: 'Delivery Failed',
						search_abatement: 'Protection',
						search_abatement_spam: 'Spam',
						search_abatement_virus: 'Malware',
						search_abatement_cdr: 'CDR',
						search_abatement_normal: 'Normal', //181012
						search_etc: 'Etc.',
						search_etc_file: 'with Attachments',
						search_etc_dsn: 'Mail Notification', //181012
						search_mid: 'Mail ID',
						search_country: 'Country',
						search_all_country: 'All',
						search_select_country: 'Select Country',
						search_mail_delivery: 'Mail Delivery', //181012
						search_help1: '  Will search all emails when the Options are',
						search_help2: '"Unchecked"',
						search_help3: '.',
						close: 'Close',
						submit: 'Search',
						btn_submit: 'Apply',
						list_date: 'Date',
						list_sender: 'Sender',
						list_recver: 'Recipient',
						list_sent_type: 'Types',
						list_title: 'Title',
						list_process: 'Threats Protection',
						list_sent_type_send: 'Outgoing',
						list_sent_type_recv: 'Incoming',
						list_sent_type_rs: 'Internal',
						list_sent_type_relay: 'Relay',
						list_sent_type_mirror: 'Mirroring',
						list_sent_type_dsn: 'Notification Mail',
						list_file: 'Attachments',
						list_size: 'Size',
						list_detail: 'Records',
						list_country: 'Country',
						list_process_spam: 'S',
						list_process_spam_tooltip: 'SPAM',
						list_process_virus: 'M',
						list_process_virus_tooltip: 'MALWARE',
						list_process_cdr: 'C',
						list_process_cdr_tooltip: 'CDR',
						list_process_delivery: 'D',
						list_process_delivery_tooltip: 'DELIVERY',
						list_no_title: '(No Title)',
						list_mail_datail: 'View Details',
						list_country_null: 'Null',
						list_etc_menu_header: 'View Headers',
						list_etc_menu_resend: 'Resend',
						list_etc_menu_spam: 'Report Spam',
						list_etc_menu_spam2: 'File Spam', //181012
						list_etc_menu_eml_down: 'Save as EML file',
						list_etc_menu_exception: 'Exception Settings',
						list_etc_menu_exception_title: 'Exception Settings',
						list_etc_menu_exception_item: 'Exception types',
						list_etc_menu_spam_register_title: 'Spam registration',
						list_etc_menu_spam_register_item: 'Spam registration items',
						list_etc_menu_exception_item_ip: 'IP',
						list_etc_menu_exception_item_sender: 'Sender', //181012
						list_etc_menu_exception_item_recver: 'Recipient', //181012
						list_etc_menu_exception_item_domain: 'Domain',
						list_etc_menu_exception_item_send_domain: 'Sender Domain',
						list_etc_menu_exception_item_recv_domain: 'Recipient Domain',
						list_etc_menu_exception_item_email: 'Email',
						list_etc_menu_exception_item2_or: 'included', //181012
						list_etc_menu_exception_item2_and: 'matched', //181012
						list_etc_menu_exception_item2_start: 'started', //181012
						list_etc_menu_exception_item2_end: 'ended', //181012
						list_etc_menu_exception_item_help: 'Exception Settings can be set by the exception type and its entry, and any emails that are matched up with the settings won＇t be blocked.',
						list_etc_menu_spam_register_item_help: 'Spam registration can be set to sender, recipient, sender domain, recipient domain, and IP. If the same conditions are set after the setting, incoming mail will be blocked.',
						process_result_title: 'Threats Protection Results',
						process_spam_result_title: 'Spam Results',
						process_virus_result_title: 'Malware Results',
						process_cdr_result_title: 'CDR Results',
						process_delivery_result_title: 'Delivery Results',
						process_result_date: 'Date',
						process_result_stat: 'Status',
						process_result_info: 'Details',
						process_result_file_name: 'File Name',
						process_result_virus_stat: 'Scan Results',
						process_result_virus_name: 'Malware Name',
						process_result_cdr_stat: 'Results', //181012
						process_result_cdr_detail: 'Details', //181012
						process_result_cdr_image: 'Images',
						process_result_issue: 'Results',
						process_result_block: 'Blocked',
						process_result_pass: 'Passed',
						process_result_crypt: 'File Password',
						original_eml_title: 'View Mail Headers',
						detail_history: 'Records',
						detail_history_date: 'Date',
						detail_history_stat: 'Status',
						detail_history_info: 'Details',
						detail_history_list_chk_spam: 'Spam Scan',
						detail_history_list_chk_virus: 'Malware Scan',
						detail_history_list_chk_cdr: 'CDR Scan',
						detail_history_list_pass: 'Passed',
						detail_history_virus_list_pass: 'Normal',
						detail_history_list_block: 'Blocked',
						detail_history_list_delete: 'Removed',
						detail_history_list_disinfected: 'Cured',
						detail_history_list_infected: 'Detection',
						detail_history_list_suspected: 'Suspicious',
						detail_history_list_spam: 'Spam Exceptions', //181012
						detail_history_list_drm: 'Encrypted File', //181012
						detail_history_cdr_list_pass: 'Normal', //181012
						detail_history_cdr_list_unset: 'Disabled',
						file_detail_title: 'File Details',
						file_detail_filename: 'File Name',
						file_detail_filesize: 'File Size',
						file_detail_encode: 'Encoding',
						file_detail_etc: 'Remarks',
						mail_tracking: 'Mail Tracking',
						mail_tracking_date: 'Date',
						mail_tracking_flag: 'Flag',
						mail_tracking_country: 'Country',
						mail_tracking_ip: 'IP',
						mail_view: 'View Mail',
						mail_view_send: 'Sender:',
						mail_view_recv: 'Recipient:',
						mail_view_cc: 'CC:',
						mail_image_view: 'Show Image',
						mail_image_view_hidden: 'Hide Image',
						mail_image_view_noti: 'Some content is temporarily blocked to protect your privacy.',
						mail_original_eml: 'Original Mail',
						mail_quarantine_eml: 'Quarantine mail',
						mail_parse_type_file_send: 'File Transfer',
						mail_recver_mail_input: 'Enter recipient mail',

						mail_parse_type_body: 'Mail Body',
						mail_parse_type_cid: 'Image on Mail Body',
						mail_parse_type_html: 'HTML',
						mail_parse_type_text: 'TEXT',
						mail_parse_type_attach: 'Attachment',
						mail_resend_noti: 'Re-transfer request has been made.<br>The function does not work for 2 minutes.',
						mail_resend_noti2: 'File passed to email address.',
						mail_two_min_title: 'Information',
						mail_two_min_noti: 'Please try again in a moment.',
						
						sd_external_error_export_success: '[Sanitization exception] Protection',
						sd_external_error_export_bypass_from_exceptlist: '[Sanitization exception] Admin policy (File)',
						sd_external_error_export_bypass_from_user_specific_exceptlist: '[Sanitization exception] Admin policy (User)',
						sd_external_error_export_bypass_from_not_support_ext: '[Sanitization exception] Unsupported file extension',
						sd_external_error_export_bypass_from_except_extension: '[Sanitization exception] Exceptional file extension',
						sd_external_error_export_bypass_from_password_protected_ziparchive: '[Sanitization exception] Password protected archive files',
						sd_external_error_export_bypass_from_password_protected: '[Sanitization exception] Password protected document files',
						sd_external_error_export_bypass_from_pe_limit_size: '[Sanitization exception] Exceeded file size limit (Executable files)',
						sd_external_error_export_bypass_from_doc_limit_size: '[Sanitization exception] Exceeded file size limit (Document files)',
						sd_external_error_export_bypass_from_not_support_executable_archive: '[Sanitization exception] Executable archive files',
						sd_external_error_export_bypass_from_break_filename_encoding_in_zip: '[Sanitization exception] File name encoding error in archive files',
						sd_external_error_export_bypass_filetype_policy: '[Sanitization exception] File format policy',
						sd_external_error_export_bypass_encryption_zip: '[Sanitization exception] Password protected archive files',
						sd_external_error_export_bypass_from_attached_html_file: '[Sanitization exception] Unhtmled file extension',
						sd_external_error_export_bypass_does_not_support_file_version: '[Sanitization exception] Unsupported file versions',
						
						sd_external_error_export_deny_from_blacklist: '[Blocked] Admin policy (File)',
						sd_external_error_export_deny_from_user_specific_blacklist: '[Blocked] Admin policy (User)',
						sd_external_error_export_deny_from_not_support_ext: '[Blocked] Unsupported extension',
						sd_external_error_export_deny_from_password_protected_ziparchive: '[Blocked] Password protected archive file',
						sd_external_error_export_deny_from_invalid_password_archive: '[Blocked] Wrong password input (Archive file)',
						sd_external_error_export_deny_from_password_protected: '[Blocked] Password protected document file (Policy)',
						sd_external_error_export_deny_from_invalid_password_doc: '[Blocked] Wrong password input (Document file)',
						sd_external_error_export_deny_from_pe_limit_size: '[Blocked] Exceeded file size limit (Executable files)',
						sd_external_error_export_deny_from_doc_limit_size: '[Blocked] Exceeded file size limit (Document files)',
						sd_external_error_export_deny_from_not_support_executable_archive: '[Blocked] Executable archive files',
						sd_external_error_export_deny_from_break_filename_encoding_in_zip: '[Blocked] File name encoding error in archive files',
						sd_external_error_export_deny_from_file_length_limit: '[Blocked] More than 260 letters of file name',
						sd_external_error_export_deny_from_n_files_over_in_zip: '[Blocked] Number of file limit within a file',
						sd_external_error_export_deny_from_attached_html_file: '[Blocked] Attached HTML files',
						sd_external_error_export_suspect_apt_hwp_file: '[Blocked] HWP Exploit',
						sd_external_error_export_suspect_apt_office_file: '[Blocked] Office Exploit',
						sd_external_error_does_not_support_executable_archive: '[Blocked] Executable archive files',
						sd_external_error_modified_file_extension_type_1: '[Blocked] Extension not matched',
						sd_external_error_modified_file_extension_type_2: '[Blocked] Forged or altered extension',
						sd_external_error_export_deny_from_pe_in_zip_mnd_only: '[Blocked] EXE file existed from archive files',
						sd_external_error_export_deny_from_0_files_in_zip: '[Blocked] File not found from archive files',
						sd_external_error_force_encryption_failed: '[Blocked] DS encryption error',
						sd_external_error_does_not_support_file_extension_from_ds_localset: '[Blocked] DS encryption unsupported extension',
						sd_external_error_bad_casting: '[Santizaiton error] Static Cast Error',
						sd_external_error_invalid_options: '[Sanitization error] Invalid options (COM)',
						sd_external_error_invalid_header_from_options: '[Sanitization error] Invalid options (API)',
						sd_external_error_make_stup_failed: '[Sanitization error] Executable files',
						sd_external_error_copy_file_failed: '[Sanitization error] Copy files failed',
						sd_external_error_move_file_failed: '[Sanitization error] Move files failed',
						sd_external_error_create_vrf_temp_failed: '[Sanitization error] Temporary folder creation failed',
						sd_external_error_string_format_failed: 'StringCchPrintf failed',
						sd_external_error_invalid_file_from_archive: 'Unknown file from Zip Sanitizer',
						sd_external_error_load_library_failed: '[Sanitization error] Library error (DLL)',
						sd_external_error_file_does_not_exist: '[Sanitization error] File not found',
						sd_external_error_exploit_detected: 'Suspicous and malicious code block',
						sd_external_error_aspose_slides_undefined: 'Powerpoint content extraction error',
						sd_external_error_aspose_words_undefined: 'Word content extraction error',
						sd_external_error_aspose_cells_undefined: 'Excel content extraction error',
						sd_external_error_aspose_images_loading_failed: 'Image content extraction error',
						sd_external_error_aspose_pdf_undefined: 'PDF content extraction error',
						sd_external_error_aspose_eml_attachment_extract_fail: 'EML content extraction error',
						sd_external_error_aspose_eml_attachment_assemble_fail: 'EML content combind error',
						sd_external_error_cad_convert_fail: 'CAD content extraction error',
						sd_external_error_html_python_routine_failed: 'Python Beatifulsopu4 failed',
						sd_external_error_ichitaro_converting_failed: 'ICHITARO converting failed',
						sd_external_error_ichitaro_python_socket_failed: 'ICHITARO Socket communication failed',
						sd_external_error_text_reassemble_failed: 'Text body reconstruction failed',
						sd_external_error_e_outofmemory: '[Sanitization error] Insufficient memory',
						sd_external_error_e_abort: '[Sanitization error] Sanitization stopped',
						sd_external_error_e_nointerface: '[Sanitization error] Interface error',
						sd_external_error_e_invalidarg: '[Sanitization error] Parameter error',
						sd_external_error_e_unexpected: '[Sanitization error] Unknown error',
						sd_external_error_e_filesize_0: '[Sanitization error] File size 0',
						sd_external_error_aspose_slides_check_macro: '[Sanitization error] Macro check error (Slides)',
						sd_external_error_aspose_cells_check_macro: '[Sanitization error] Macro check error (Cells)',
						sd_external_error_aspose_words_check_macro: '[Sanitization error] Macro check error (Words)',
						sd_external_error_does_not_support_file_version: '[Blocked] Unsupported file version',
						sd_external_error_zip_extract_fail_export_deny: 'Damaged ZIP file content',
						sd_external_error_modified_file_extension_type_3: '[Blocked] Forged or altered file incoming',
					},
					eventlist: {
						help: '  You can check every events status that is recorded during the system operation.',
						location_1depth: 'Monitoring',
						location_2depth: 'Event Monitoring',
						total: 'All',
						count: 'Result(s)',
						select_option_all: 'All',
						select_option_id: 'ID',
						select_option_ip: 'IP',
						select_option_desc: 'Details',
						list_time: 'Time',
						list_id: 'ID',
						list_ip: 'IP',
						list_content: 'Activities',
						list_desc: 'Details',
						filter_option_all: 'All activities',
						filter_option_error: 'Error',
						filter_option_login: 'Login',
						filter_option_mailitem: 'Mail',
						filter_option_svc: 'Service',
						filter_option_log: 'Log',
						filter_option_config: 'Config',
						filter_option_add: 'Manage (add)',
						filter_option_del: 'Manage (delete)',
						filter_option_modify: 'Manage (modify)'
					},
					servicelist: {
						help: '  You can manage system services status.',
						location_1depth: 'Monitoring',
						location_2depth: 'Service Monitoring',
						seg_smtp: 'SEG SMTP',
						seg_smtp_start: 'Start',
						seg_smtp_stop: 'Stop',
						seg_cron: 'CRON',
						seg_cron_start: 'Start',
						seg_cron_stop: 'Stop',
						seg_spam: 'SPAM',
						seg_spam_start: 'Start',
						seg_spam_stop: 'Stop',
						seg_virus: 'MALWARE',
						seg_virus_start: 'Start',
						seg_virus_stop: 'Stop',
						seg_cdr: 'CDR',
						seg_cdr_start: 'Start',
						seg_cdr_stop: 'Stop',
						service_on: 'Running',
						service_off: 'Stopped'
					},
					logmoniter: {
						help: '  You can manage the Log files.',
						location_1depth: 'Monitoring',
						location_2depth: 'Log Monitoring',
						total: 'All',
						count: 'Result(s)',
						log_type: 'Log Type',
						log_list_modify_time: 'Date Modified',
						log_list_filename: 'Log File Name',
						log_list_filesize: 'File Size',
						log_list_down: 'Download',
					},
					queuelist:{
						help: '  You can monitor the Queue status. The mail queue management is available under Preferences > SMTP Settings > SMTP Message Queue.',
						location_1depth: 'Monitoring',
						location_2depth: 'Queue Monitoring',
						equipment1: 'Equipment1',
						equipment2: 'Equipment2',
						queue_list_folder: 'Queue Folder',
						queue_list_normal_count: 'Normal File Count',
						queue_list_queue_count: 'Queue File Count',
						queue_list_queue_time: 'Oldest Queue Time',
						queue_list_desc: 'Details',
						queue_list_detail_btn: 'Details',
						queue_modal_title: 'SMTP Queue Details',
						queue_modal_sub_dt_title1: 'SMTP Queue',
						queue_modal_sub_dt_title2: 'Details',
						queue_modal_dt_list_file: 'Queue File Info.',
						queue_modal_dt_list_size: 'Mail Size',
						queue_modal_dt_list_time: 'File Modified',
						queue_modal_sub_nm_title1: 'SMTP Queue',
						queue_modal_sub_nm_title2: 'Normal File Info.',
						queue_modal_nm_list_file: 'Queue File Info.',
						queue_modal_nm_list_size: 'Mail Size',
						queue_modal_nm_list_time: 'File Modified',
						queue_modal_list_etc: 'Delete and Backup',
						queue_modal_detail_title: 'Queue File Details',
						queue_modal_detail_title2: 'Queue General File Details',
						queue_modal_detail_list_time: 'Reception Time',
						queue_modal_detail_list_ip: 'IP',
						queue_modal_detail_list_sender: 'Sender',
						queue_modal_detail_list_recver: 'Receiver',
						queue_modal_detail_list_result: 'Result(Retries Count)',
						queue_modal_detail_list_detail_info: 'Details',
						close: 'Close',
						queue_mail: 'Send mail',
						queue_seg_in: 'Quarantine request',
						queue_seg_out: 'Quarantine complete'
					},
					systemMoniter:{
						help: '  You can monitor the whole system status. You will be notified when certain threshold is exceeded.',
						location_1depth: 'Monitoring',
						location_2depth: 'System Monitoring',
						equipment1: 'Equipment1',
						equipment2: 'Equipment2',
						graph: 'Graph',
						graph_daily: 'Daily',
						graph_weekly: 'Weekly',
						graph_monthly: 'Monthly',
						graph_yearly: 'Yearly',
						graph_5min_average: '(based average for every 5 mins)',
						graph_30min_average: '(based average for every 30 mins)',
						graph_2hour_average: '(based average for every 2 hrs)',
						graph_1day_average: '(based average for every 1 day)',
						graph_network: 'Network Graph',
						graph_cpu: 'CPU Graph',
						graph_disk: 'Storage Graph',
						graph_memory: 'Memory Graph',
						graph_network_name: 'NETWORK',
						graph_cpu_name: 'CPU',
						graph_disk_name: 'STORAGE',
						graph_memory_name: 'MEMORY',
						graph_labelAveIncoming: 'AVG Input',
						graph_labelAveOutgoing: 'AVG Output',
						graph_labelMaxIncoming: 'MAX Input',
						graph_labelMaxOutgoing: 'MAX Output',
						graph_labelAveUsage: 'AVG Usage',
						graph_labelMaxUsage: 'MAX Usage',
						graph_time_hour: 'T',
						graph_time_day: 'D',
						graph_time_sunday: 'Sun',
						graph_time_monday: 'Mon',
						graph_time_tuesday: 'Tue',
						graph_time_wednesday: 'Wed',
						graph_time_thursday: 'Thu',
						graph_time_friday: 'Fri',
						graph_time_saturday: 'Sat',
						graph_time_jan: 'Jan',
						graph_time_feb: 'Feb',
						graph_time_mar: 'Mar',
						graph_time_apr: 'Apr',
						graph_time_may: 'May',
						graph_time_jun: 'Jun',
						graph_time_jul: 'Jul',
						graph_time_aug: 'Aug',
						graph_time_sep: 'Sep',
						graph_time_oct: 'Oct',
						graph_time_nov: 'Nov',
						graph_time_dec: 'Dec',
						select_button_help: '  Please select after loading.',
						the_week: 'week',
						the_year: 'year ',
					},
					statistics: {
						help: '  You can check various statistics here.',
						location_1depth: 'Statistics',
						location_2depth: 'Statistics Report',
						tab_all_help: '  You can check various statistics here.',
						tab_all: 'All',
						tab_all_total: 'All',
						tab_all_count: 'Result(s)',
						tab_all_select_all_domain: 'All Domain',
						tab_all_period_week: '7 days',
						tab_all_period_month: '30 days',
						tab_all_period_custom: 'Date Range',
						tab_all_graph_title: 'View Graph',
						tab_all_list_date: 'Date',
						tab_all_list_mail_status: 'Mail Status',
						tab_ali_list_filter: 'Filter',
						tab_all_list_th_mail_status_send: 'Outgoing',
						tab_all_list_th_mail_status_recv: 'Incoming',
						tab_all_list_th_mail_status_rs: 'Internal',
						tab_all_list_th_mail_status_relay: 'Relay',
						tab_all_list_th_mail_status_mirror: 'Mirroring',
						tab_all_list_th_mail_status_total: 'Total',
						tab_all_list_th_filter_spam: 'Spam',
						tab_all_list_th_filter_virus: 'Malware',
						tab_all_list_th_filter_cdr: 'CDR',
						tab_all_list_th_normal_send: 'Outgoing',
						tab_all_list_th_normal_recv: 'Incoming',
						tab_all_list_th_normal_rs: 'Internal',
						tab_all_list_th_normal_relay: 'Relay',
						tab_all_list_th_normal_mirror: 'Mirroring',
						tab_all_list_th_status_sendErr: 'Sender Error',
						tab_all_list_th_status_recvErr: 'Recipient Error',
						tab_all_list_th_status_relayErr: 'Relay Denied',
						tab_all_list_th_status_deliveryErr: 'Delivery Failed',
						tab_all_list_th_spam_send: 'Outgoing',
						tab_all_list_th_spam_recv: 'Incoming',
						tab_all_list_th_virus_send: 'Outgoing',
						tab_all_list_th_virus_recv: 'Incoming',
						tab_all_list_th_cdr_send: 'Outgoing',
						tab_all_list_th_cdr_recv: 'Incoming',
						tab_all_sender_top5: 'Top 5 Sender',
						tab_all_sender_no: 'No.',
						tab_all_sender_title: 'Sender',
						tab_all_sender_count: 'Count',
						tab_all_recver_top5: 'Top 5 Recipient',
						tab_all_recver_no: 'No.',
						tab_all_recver_title: 'Recipient',
						tab_all_recver_count: 'Count',
						tab_all_sender_domain_top5: 'Top 5 Sender Domain',
						tab_all_sender_domain_no: 'No.',
						tab_all_sender_domain_title: 'Domain',
						tab_all_sender_domain_count: 'Count',
						tab_all_recver_domain_top5: 'Top 5 Recipient Domain',
						tab_all_recver_domain_no: 'No.',
						tab_all_recver_domain_title: 'Domain',
						tab_all_recver_domain_count: 'Count',
						tab_all_sender_country_top5: 'Top 5 Sender Country',
						tab_all_sender_country_no: 'No.',
						tab_all_sender_country_title: 'Country',
						tab_all_sender_country_count: 'Count',
						tab_all_graph_send: 'Outgoing',
						tab_all_graph_recv: 'Incoming',
						tab_all_graph_rs: 'Internal',
						tab_all_graph_relay: 'Relay',
						tab_all_graph_mirror: 'Mirroring',
						tab_all_graph_spam: 'Spam',
						tab_all_graph_virus: 'Malware',
						tab_all_graph_cdr: 'CDR',
						
						tab_spam_help: '  You can check spam mail statistics here',
						tab_spam: 'Spam',
//						tab_spam_usage: '',
						tab_spam_total: 'All',
						tab_spam_count: 'Result(s)',
						tab_spam_select_all_domain: 'All Domain',
						tab_spam_period_week: '7 days',
						tab_spam_period_month: '30 days',
						tab_spam_period_custom: 'Date Range',
						tab_spam_graph_title: 'View Graph',
						tab_spam_filter_all: 'All',
						tab_spam_filter_send: 'Outgoing',
						tab_spam_filter_recv: 'Incoming',
						tab_spam_filter_rs: 'Internal',
						tab_spam_filter_relay: 'Relay',
						tab_spam_list_date: 'Date',
						tab_spam_list_sdr: 'Sender Domain Error',
						tab_spam_list_rdr: 'Recipient Domain Error',
						tab_spam_list_hdr: 'HELO Domain Error',
						tab_spam_list_spf: 'SPF',
						tab_spam_list_rbl: 'RBL',
						tab_spam_list_send_block: 'No Sender',
						tab_spam_list_recv_block: 'No Recipients',
						tab_spam_list_msg_size: 'Message Size Limit',
						tab_spam_list_limit_server: 'Waypoint Server Limit',
						tab_spam_list_pattern_filter: 'Pattern Filter',
						tab_spam_list_content_filter: 'Content Filter',
						tab_spam_list_limit_recv: 'Recipient Number Limit',
						tab_spam_list_exception: 'Exception',
						tab_spam_list_reject: 'Reject',
						tab_spam_country_top5: 'Top 5 Country',
						tab_spam_country_no: 'No.',
						tab_spam_country_title: 'Country',
						tab_spam_country_count: 'Count',
						tab_spam_type_top5: 'Top 5 Pattern',
						tab_spam_type_no: 'No.',
						tab_spam_type_title: 'Pattern',
						tab_spam_type_count: 'Count',
						tab_spam_filter_top5: 'Top 5 Filter',
						tab_spam_filter_no: 'No.',
						tab_spam_filter_title: 'Filter',
						tab_spam_filter_count: 'Count',
						tab_spam_ip_top5: 'IP TOP5',
						tab_spam_ip_no: 'No.',
						tab_spam_ip_title: 'IP',
						tab_spam_ip_count: 'Count',
						tab_spam_graph_send: 'Outgoing',
						tab_spam_graph_recv: 'Incoming',
						tab_spam_graph_block_policy: 'Block Policy',
						tab_spam_graph_smtp_block: 'SMTP Stage Block',
						tab_spam_graph_connect_block: 'Connection Stage Block',
						tab_spam_graph_sdr: 'Sender Domain Error',
						tab_spam_graph_rdr: 'Recipient Domain Error',
						tab_spam_graph_hdr: 'HELO Domain Error',
						tab_spam_graph_spf: 'SPF',
						tab_spam_graph_rbl: 'RBL',
						tab_spam_graph_send_block: 'No Sender',
						tab_spam_graph_recv_block: 'No Recipient',
						tab_spam_graph_msg_size: 'Message Size Limit',
						tab_spam_graph_limit_server: 'Waypoint Server Limit',
						tab_spam_graph_pattern_filter: 'Pattern Filter',
						tab_spam_graph_content_filter: 'Content Filter',
						tab_spam_graph_limit_recv: 'Recipient Number Limit',
						tab_spam_graph_exception: 'Exception',
						tab_spam_graph_tag: 'Tagging',
						
						tab_virus_help: '  You can check malware mail statistics here.',
						tab_virus: 'Malware',
						tab_virus_total: 'All',
						tab_virus_count: 'Result(s)',
						tab_virus_select_all_domain: 'All Domain',
						tab_virus_period_week: '7 days',
						tab_virus_period_month: '30 days',
						tab_virus_period_custom: 'Date Range',
						tab_virus_graph_title: 'View Graph',
						tab_virus_list_date: 'Date',
						tab_virus_list_send: 'Outgoing',
						tab_virus_list_recv: 'Incoming',
						tab_virus_list_rs: 'Internal',
						tab_virus_list_relay: 'Relay',
						tab_virus_list_total: 'Total',
						tab_virus_sender_top5: 'Top 5 Sender',
						tab_virus_sender_no: 'No.',
						tab_virus_sender_title: 'Sender',
						tab_virus_sender_count: 'Count',
						tab_virus_recver_top5: 'Top 5 Recipient',
						tab_virus_recver_no: 'No.',
						tab_virus_recver_title: 'Recipient',
						tab_virus_recver_count: 'Count',
						tab_virus_malignity_top5: 'Top 5 Malicious Code',
						tab_virus_malignity_no: 'No.',
						tab_virus_malignity_title: 'Malicious Code',
						tab_virus_malignity_count: 'Count',
						tab_virus_type_top5: 'Top 5 Type',
						tab_virus_type_no: 'No.',
						tab_virus_type_title: 'Types',
						tab_virus_type_count: 'Count',
						tab_virus_graph_send: 'Outgoing',
						tab_virus_graph_recv: 'Incoming',
						tab_virus_graph_total: 'Total',
						
						tab_cdr_help: '  You can check CDR statistics here.',
						tab_cdr: 'CDR',
						tab_cdr_total: 'All',
						tab_cdr_count: 'Result(s)',
						tab_cdr_select_all_domain: 'All Domain',
						tab_cdr_period_week: '7 days',
						tab_cdr_period_month: '30 days',
						tab_cdr_period_custom: 'Date Range',
						tab_cdr_graph_title: 'View Graph',
						tab_cdr_list_date: 'Date',
						tab_cdr_list_send: 'Outgoing',
						tab_cdr_list_recv: 'Incoming',
						tab_cdr_list_count: 'Count',
						tab_cdr_list_domain: 'Domain',
						tab_cdr_list_size: 'Size',
						tab_cdr_sender_top5: 'Top 5 Sender',
						tab_cdr_sender_no: 'No.',
						tab_cdr_sender_title: 'Sender',
						tab_cdr_sender_count: 'Count',
						tab_cdr_recver_top5: 'Top 5 Recipient',
						tab_cdr_recver_no: 'No.',
						tab_cdr_recver_title: 'Recipient',
						tab_cdr_recver_count: 'Count',
						tab_cdr_graph_send: 'Outgoing',
						tab_cdr_graph_recv: 'Incoming',
						
						tab_normal_help: '  You can check normal mail statistics here.',
						tab_normal: 'Normal',
						tab_normal_total: 'All',
						tab_normal_count: 'Result(s)',
						tab_normal_select_all_domain: 'All Domain',
						tab_normal_period_week: '7 days',
						tab_normal_period_month: '30 days',
						tab_normal_period_custom: 'Date Range',
						tab_normal_graph_title: 'View Graph',
						tab_normal_list_date: 'Date',
						tab_normal_list_send: 'Outgoing',
						tab_normal_list_recv: 'Incoming',
						tab_normal_list_rs: 'Internal',
						tab_normal_list_relay: 'Relay',
						tab_normal_list_mirror: 'Mirroring',
						tab_normal_sender_top5: 'Top 5 Sender',
						tab_normal_sender_no: 'No.',
						tab_normal_sender_title: 'Sender',
						tab_normal_sender_count: 'Count',
						tab_normal_recver_top5: 'Top 5 Recipient',
						tab_normal_recver_no: 'No.',
						tab_normal_recver_title: 'Recipient',
						tab_normal_recver_count: 'Count',
						tab_normal_sender_domain_top5: 'Top 5 Sender Domain',
						tab_normal_sender_domain_no: 'No.',
						tab_normal_sender_domain_title: 'Domain',
						tab_normal_sender_domain_count: 'Count',
						tab_normal_recver_domain_top5: 'Top 5 Sender Domain',
						tab_normal_recver_domain_no: 'No.',
						tab_normal_recver_domain_title: 'Domain',
						tab_normal_recver_domain_count: 'Count',
						tab_normal_sender_country_top5: 'Top 5 Sender Country',
						tab_normal_sender_country_no: 'No.',
						tab_normal_sender_country_title: 'Country',
						tab_normal_sender_country_count: 'Count',
						tab_normal_graph_send: 'Outgoing',
						tab_normal_graph_recv: 'Incoming',
						tab_normal_graph_rs: 'Internal',
						tab_normal_graph_relay: 'Relay',
						tab_normal_graph_mirror: 'Mirroring',
						
						tab_final_help: '  Mail delivery failed statistics are available here.',
						tab_final: 'Mail Delivery',
						tab_final_total: 'All',
						tab_final_count: 'Result(s)',
						tab_final_select_all_domain: 'All Domain',
						tab_final_period_week: '7 days',
						tab_final_period_month: '30 days',
						tab_final_period_custom: 'Date Range',
						tab_final_graph_title: 'View Graph',
						tab_final_list_date: 'Date',
						tab_final_list_pass: 'Succeeded',
						tab_final_list_reject: 'Failed',
						tab_final_graph_pass: 'Succeeded',
						tab_final_graph_reject: 'Failed',
						tab_final_graph_total: 'Total',
						
						tab_rank_help: '  Shows TOP5 statistics on sender, recipient, sender domain, recipient domain, and country of origin.',
						tab_rank: 'Ranking',
						
						tab_tagging_help: '  You can check the statistics for tag processing that categorizes mail.',
					},
					domain: {
						help: '  You can set up your domain information here.',
						location_1depth: 'Preferences',
						location_2depth: 'Domain Settings',
						total: 'All',
						count: 'Result(s)',
						search_placeholder: 'Enter a domain here.',
						list_domain_name: 'Domain',
						list_default_domain: 'Default Domain',
						list_internal_external: 'Internal/External',
						list_id_case_sensitivity: 'ID Case-sensitive',
						list_create_time: 'Date Created',
						list_edit: 'Edit/Delete',
						list_item_isLocal_true: 'Internal',
						list_item_isLocal_false: 'External',
						list_item_isCaseIgnore_true: 'Yes',
						list_item_isCaseIgnore_false: 'No',
						list_item_mirror: 'Mirror',
						list_item_mirror_usage: 'Mirror Usage',
						list_item_mirror_port: 'Port',
						list_item_smart_host_usage: 'Mail Server Usage',
						list_item_smart_host_setting: 'Incoming mail server',
						list_item_smart_host: 'Mail Server',
						list_item_smart_host_server: 'Mail Server Info',
						list_item_smart_host_port: 'Mail Server Port',
						list_item_smart_host_type: 'Mail Server Type',
						list_item_smart_host_ssl: 'Mail Server SSL',
						list_item_smart_host_type_smtp: 'SMTP Serivce',
						list_item_smart_host_type_pop3: 'POP Serivce',
						list_item_smart_host_type_imap4: 'IMAP Serivce',
						list_item_server_help: '(IP or Domain)',
						list_item_edit: 'Edit',
						list_item_del: 'Delete',
						list_item_backup: 'Backup',
						btn_add: 'Add',
						btn_submit: 'Apply',
						btn_close: 'Close',
						btn_yes: 'Yes',
						btn_no: 'No',
						label_switch_on: 'On',
						label_switch_off: 'Off',
						label_switch_internal: 'Internal',
						label_switch_external: 'External',
						modal_title: 'Domain Addition',
						modal_list_domain_name: 'Domain',
						modal_list_internal_external: 'Internal/External Domain',
						modal_list_id_case_sensitivity: 'ID Case-sensitive',
						modal_edit_title: 'Edit Domain',
						modal_edit_list_domain_name: 'Domain',
						modal_edit_list_default_domain: 'Default Domain Settings',
						modal_edit_list_internal_external: 'Internal/External Domain',
						modal_edit_list_id_case_sensitivity: 'ID Case-sensitive',
						modal_list_mirror_setting: 'Mail Mirroring',
						modal_list_mirror_server: 'Server Info',
						modal_list_mirror_port: 'Server Port',
						modal_list_mirror_ssl: 'SSL',
						modal_list_smarthost_server: 'Server Info',
						modal_list_smarthost_port: 'Server Port',
						modal_list_smarthost_ssl: 'SSL',
						modal_del_title: 'Delete Domain',
						modal_del_msg1: 'Domain:  [',
						modal_del_msg2: ']  Are you sure you want to delete this?',
						modal_list_smarthost_on: 'designation',
						modal_list_smarthost_off: 'MX Record',
					},
					autoDelete: {
						help: '  You can set AutoDelete period of log file, original mail, and mail list for effective system operation.',
						location_1depth: 'Preferences',
						location_2depth: 'AutoDelete Settings',
						usage: 'Enabled',
						label_switch_on: 'On',
						label_switch_off: 'Off',
						log_file: 'Log File',
						log_file_help1: 'more than', 
						log_file_help2: ' day(s) old will be deleted', 
						save_mail: 'Stored Mail(Original)',
						save_mail_help1: 'more than',
						save_mail_help2: ' day(s) old will be deleted',
						mail_list: 'Mail List',
						mail_list_help1: 'more than',
						mail_list_help2: ' day(s) old will be deleted',
						common_help: '  Common : 0 means not delete',
						btn_submit: 'Apply',
						loding_msg1: 'In progress',
						loding_msg2: 'Saving the changes.',
						result: 'Result',
						result_msg: 'The new settings were successfully applied.',
						result_msg1: 'You must restart',
						result_msg2: ' for the changes to take effect.',
						result_location: 'Location: home > Monitoring > Service Monitoring',
						seg_cron_serivce: 'SEG CRON Service',
						error: 'Error',
						error_msg: 'Failed to apply changes.'
					},
					smtp: {
						help: '  You can configure STMP settings.',
						location_1depth: 'Preferences',
						location_2depth: 'SMTP Settings',
						log_setting: 'SMTP Log Settings',
						log_path: 'Log Path',
						log_level: 'Log Level',
						log_level_error: 'Error',
						log_level_info: 'Info.',
						log_level_debug: 'Debug',
						dns_socket: 'DNS & Socket',
						dns_server: 'DNS Server',
						port_number: 'Port Number',
						port: 'port',
						ipv4: 'IPv4',
						ipv4_label_switch_on: 'On',
						ipv4_label_switch_off: 'Off',
						ipv6: 'IPv6',
						ipv6_label_switch_on: 'On',
						ipv6_label_switch_off: 'Off',
						connection: 'Connection Timeout',
						second: 'Sec',
						command: 'Command Timeout',
						receive_mail: 'Mail Receiveing Timeout',
						smtp_msg_queue: 'SMTP Message Queue',
						queue_empty_period: 'Queue Removal Period',
						queue_path: 'Queue Path',
						queue_count: 'Queue Number',
						count: 'Count',
						return_received_mail: 'Return Received Mail',
						hour_later: 'hr(s) later',
						return_sent_mail: 'Return Sent Mail',
						delete_returned_mail: 'Delete Return Mail',
						queue_connection: 'Connection Timeout',
						queue_command: 'Command Timeout',
						queue_receive_mail: 'Mail Receiveing Timeout',
						smtp_management: 'SMTP Management',
						use_smtp_auth: 'SMTP Authentication',
						use_smtp_auth_label_switch_on: 'On',
						use_smtp_auth_label_switch_off: 'Off',
						allow_relay_local_machine: 'Allow Local Equipment Relay',
						allow_relay_local_machine_label_switch_on: 'On',
						allow_relay_local_machine_label_switch_off: 'Off',
						allow_relay_smtp_authed: 'Allow SMTP Authorized User Relay',
						allow_relay_smtp_authed_label_switch_on: 'On',
						allow_relay_smtp_authed_label_switch_off: 'Off',
						deny_external_mail_address: 'Deny External Mail Address Relay',
						deny_external_mail_address_label_switch_on: 'On',
						deny_external_mail_address_label_switch_off: 'Off',
						use_ssl: 'SSL Enabled',
						use_ssl_label_switch_on: 'On',
						use_ssl_label_switch_off: 'Off',
						ssl_port_number: 'SSL Port Number',
						use_tls: 'TLS Enabled',
						use_tls_label_switch_on: 'On',
						use_tls_label_switch_off: 'Off',
						use_submission_port: 'Submission Port Enabled',
						use_submission_port_label_switch_on: 'On',
						use_submission_port_label_switch_off: 'Off',
						submission_port_number: 'Submission Port Number',
						loding_msg1: 'In Progress',
						loding_msg2: 'Saving the changes..',
						result: 'Result',
						result_msg: 'The new settings were successfully applied..',
						result_msg1: 'You must restart',
						result_msg2: ' for the changes to take effect.',
						result_location: 'Location: home > Monitoring > Service Monitoring',
						seg_smtp_serivce: 'SEG SMTP Service',
						error: 'Error',
						error_msg: 'Failed to apply changes.',
						btn_submit: 'Apply'

					},
					config: {
						help: '  You can access and edit various system CONFIG files.',
						location_1depth: 'Preferences',
						location_2depth: 'CONFIG Settings',
						btn_submit: 'Apply',
						approval_help: '  You can configure authentication settings.',
						auth_help: '  You can configure password policy settings.',
						core_help: '  You can configure core settings.',
						cron_help: '  You can configure reserved task settings.',
						dbcp_help: '  You can configure database settings.',
						seg_help: '  You can configure SEG settings.',
						smtp_help: '  You can configure SMTP settings.',
						sysmon_help: '  You can configure system settings.',
						process_result: 'Processing Results',
						process_result_msg: 'There are no changes.',
						result: 'Result',
						result_msg: 'Changes applied.',
						seg_smtp_serivce: 'SEG SMTP',
						seg_cron_serivce: 'SEG CRON',
						serivce: 'Service',
						and: '',
						result_msg2: 'Please restart the serivce above.',
						result_location: 'Location : home > Monitoring > Service Monitoring'

					},
					notices: {
						help: '  You can set notification options of various system services here.',
						location_1depth: 'Preferences',
						location_2depth: 'Notification Settings',
						btn_submit: 'Apply',
						btn_template: 'Preview Templates',
						btn_add: 'Add',
						btn_close: 'Close',
						btn_send: 'Send',
						error: 'Error',
						error_msg: 'Wrong email address format.',
						error_msg2: 'The email address already exists.',
						modal_template: 'Preview Templates',
						okay: 'OK',
						okay_msg: 'Changes applied.',
						interval_type: 'Repeat',
						interval_now: 'Once',
						interval_hourly: 'Every 1 hour',
						interval_daily: 'Every 1 day',
						url: 'System Check URL',
						
						tab_system: 'System Alerts',
						tab_system_help: '  You can set threshold for alerts of various system status here. [Threshold Settings (Warning: 50% recommended, Critical: 80% recommended)]',
						tab_system_usage: 'Enabled',
						tab_system_usage_label_switch_on: 'On',
						tab_system_usage_label_switch_off: 'Off',
						tab_system_refresh_time: 'Refresh Period',
						tab_system_refresh_time_min: 'min(s)',
						tab_system_refresh_time_hour: 'hr(s)',
						tab_system_refresh_time_day: 'day(s)',
						tab_system_object: 'Target',
						tab_system_threshold: 'Threshold Settings',
						tab_system_sent_time: 'Send Out When ',
						tab_system_cpu: 'CPU',
						tab_system_cpu_warning: 'Warning: ',
						tab_system_cpu_danger: 'Critical: ',
						tab_system_cpu_warning_chk: 'Warning',
						tab_system_cpu_danger_chk: 'Critical',
						tab_system_memory: 'MEMORY',
						tab_system_memory_warning: 'Warning: ',
						tab_system_memory_danger: 'Critical: ',
						tab_system_memory_warning_chk: 'Warning',
						tab_system_memory_danger_chk: 'Critical',
						tab_system_disk: 'STORAGE',
						tab_system_disk_warning: 'Warning: ',
						tab_system_disk_danger: 'Critical: ',
						tab_system_disk_warning_chk: 'Warning',
						tab_system_disk_danger_chk: 'Critical',
						tab_system_network: 'NETWORK',
						tab_system_network_warning: 'Warning: ',
						tab_system_network_danger: 'Critical: ',
						tab_system_network_warning_chk: 'Warning',
						tab_system_network_danger_chk: 'Critical',
						tab_system_sender_mail: 'Sender Mail Address',
						tab_system_mail_title: 'Alert Mail Title',
						tab_system_mail_title_placeholder: 'System Mail Alert',
						tab_system_safe_mail_title: 'Safe Alert Mail Title',
						tab_system_safe_mail_title_placeholder: 'System Safe Mail Alert',
						tab_system_noti_email: 'Receiving Email',
						tab_system_template: 'Templates',
						
						tab_spam: 'Spam Alert',
						tab_spam_help: '  You can set a mail report by user. Send yesterday＇s mail list by user',
						tab_spam_usage: 'Individual Spam List Alert Enabled',
						tab_spam_usage_label_switch_on: 'On',
						tab_spam_usage_label_switch_off: 'Off',
						tab_spam_sent_time: 'Send Period',
						tab_spam_sent_time_1hour: '1 hr',
						tab_spam_sent_time_2hour: '2 hrs',
						tab_spam_sent_time_3hour: '3 hrs',
						tab_spam_sent_time_4hour: '4 hrs',
						tab_spam_sent_time_6hour: '6 hrs',
						tab_spam_sent_time_8hour: '8 hrs',
						tab_spam_sent_time_12hour: '12 hrs',
						tab_spam_sent_time_24hour: '24 hrs',
						tab_spam_sent_time_help_msg1: '  Send out an alert on every  ',
						tab_spam_sent_time_help_msg2: '',
						tab_spam_mail_title: 'Alert Mail Title',
						tab_spam_mail_title_placeholder: 'Spam Mail Alert',
						tab_spam_sender_mail: 'Sender Mail Address',
						tab_spam_sender_user_mail: 'Send individual mail',
						tab_spam_sender_user_mail_placeholder: 'Enter individual mail recipients',
						tab_spam_sender_user_mail_once: 'Individual',
						tab_spam_sender_user_mail_popup_title: 'Send Mail',
						tab_spam_sender_user_mail_popup_help: 'It will be sent in full email. Are you sure you want to send it?',
						tab_spam_template: 'Templates',
						tab_spam_send_user_noti: 'You have been sent to the email you entered.',
						tab_spam_send_user_noti_err: 'Failure mail',
						
						tab_virus: 'Malware Alerts',
						tab_virus_help: '  You can set Malware alert threshold and its send out time. If you don＇t set the send out time, the system default value will be applied.',
						tab_virus_usage: 'Malware Alert Enabled',
						tab_virus_usage_label_switch_on: 'On',
						tab_virus_usage_label_switch_off: 'Off',
						tab_virus_threshold: 'Threshold Settings',
						tab_virus_threshold_help: ' (Count) and above, send alert.',
						tab_virus_sent_type: 'Send Types',
						tab_virus_sent_once: 'Send Out(Once)',
						tab_virus_sent_roop: 'Repeats (Every)',
						tab_virus_content_help: '  The alert will be sent out once.',
						tab_virus_sender_mail: 'Sender Email Address',
						tab_virus_mail_title: 'Alert Mail Title',
						tab_virus_mail_title_placeholder: 'Malware Alert Mail',
						tab_virus_noti_email: 'Recipient Email',
						tab_virus_template: 'Templates',
						
						tab_mail: 'Mail Alert',
						tab_mail_help: '  You can set Mail alert threshold and alert send time.  If you don＇t set the send out time, the system default value will be applied.',
						tab_mail_send_usage: 'Mail Send Alert Enabled',
						tab_mail_send_usage_label_switch_on: 'On',
						tab_mail_send_usage_label_switch_off: 'Off',
						tab_mail_send_threshold: 'Send Threshold Setting',
						tab_mail_send_threshold_help: ' (Count) and above, send alert.',
						tab_mail_recv_usage: 'Mail Receive Alert Enabled',
						tab_mail_recv_usage_label_switch_on: 'On',
						tab_mail_recv_usage_label_switch_off: 'Off',
						tab_mail_recv_threshold: 'Receive Threshold Setting',
						tab_mail_recv_threshold_help: ' (Count) and above, send alert.',
						tab_mail_rs_usage: 'Internal Usage Alert Enabled',
						tab_mail_rs_usage_label_switch_on: 'On',
						tab_mail_rs_usage_label_switch_off: 'Off',
						tab_mail_rs_threshold: 'Internal Usage Threshold Setting',
						tab_mail_rs_threshold_help: ' (Count) and above, send alert.',
						tab_mail_relay_usage: 'Relay Usage Alert Enabled',
						tab_mail_relay_usage_label_switch_on: 'On',
						tab_mail_relay_usage_label_switch_off: 'Off',
						tab_mail_relay_threshold: 'Relay Usage Threshold Setting',
						tab_mail_relay_threshold_help: ' (Count) and above, send alert.',
						tab_mail_content_help: '  The alert will be sent out once.',
						tab_mail_title: 'Alert Mail Title',
						tab_mail_title_placeholder: 'Mail Alert',
						tab_mail_sender_mail: 'Sender Mail Address',
						tab_mail_mail_title: 'Alert Mail Title',
						tab_mail_noti_email: 'Recipient Email',
						tab_mail_template: 'Templates',
						
						tab_queue: 'Queue Alert',
						tab_queue_help: '  You can set Queue alert threshold and alert send time.  If you don＇t set the send out time, the system default value will be applied.',
						tab_queue_usage: 'Queue Usage Alert Enabled',
						tab_queue_usage_label_switch_on: 'On',
						tab_queue_usage_label_switch_off: 'Off',
						tab_queue_threshold: 'Threshold Settings',
						tab_queue_threshold_help: ' (Count) and above, send alert.',
						tab_queue_sent_type: 'Send Types',
						tab_queue_sent_once: 'Send Out(Once)',
						tab_queue_sent_roop: 'Repeats (Every)',
						tab_queue_content_help: '  The alert will be sent out once.',
						tab_queue_sender_mail: 'Sender Email Address',
						tab_queue_mail_title: 'Alert Mail Title',
						tab_queue_mail_title_placeholder: 'Queue Alert Mail',
						tab_queue_safe_mail_title: 'Safe Alert Mail Title',
						tab_queue_safe_mail_title_placeholder: 'Queue Safe Alert Mail',
						tab_queue_noti_email: 'Recipient Email',
						tab_queue_template: 'Templates',
						
						tab_report: 'Report',
						tab_report_help: '  You can set Report target and Report period here.', //수정필요
						tab_report_usage: 'Report Usage Enabled',
						tab_report_usage_label_switch_on: 'On',
						tab_report_usage_label_switch_off: 'Off',
						tab_report_period: 'Target Period',
						tab_report_period_day: 'Daily Report',
						tab_report_period_week: 'Weekly Report',
						tab_report_period_month: 'Monthly Report',
						tab_report_period_select: 'Select Period',
						tab_report_period_dateFrom: 'Start Date',
						tab_report_period_dateTo: 'End Date',
						tab_report_start_noti: 'Send Date',
						tab_report_start_noti_today: 'Today',
						tab_report_start_noti_custom: 'Specific Period',
						tab_report_sent_object: 'Send Types',
						tab_report_sent_object_all: 'All',
						tab_report_sent_object_normal: 'Normal',
						tab_report_sent_object_spam: 'Spam',
						tab_report_sent_object_virus: 'Malware',
						tab_report_sent_object_send: 'Outgoing',
						tab_report_sent_object_recv: 'Incoming',
						tab_report_sent_object_cdr: 'CDR',
//						tab_report_content_help: '  발송시점 기준으로 30일 경우 이전 30일에 해당하는 보고서가 발송됩니다.',
						tab_report_sender_mail: 'Sender Email Address',
						tab_report_mail_title: 'Alert Mail Title',
						tab_report_mail_title_placeholder: 'Report Alert Mail',
						tab_report_noti_email: 'Recipient Email',
						tab_report_template: 'Templates',
						
						tab_service: 'Service Alert',
						tab_service_usage: 'Service Usage Alert Enabled',
						tab_service_content_help: '  You can set up service notifications.',
						tab_service_sender_mail: 'Sender Email Address',
						tab_service_mail_title: 'Alert Mail Title',
						tab_service_mail_title_placeholder: 'Service Alert Mail',
						tab_service_noti_email: 'Recipient Email',
						tab_service_template: 'Templates',
						
						tab_vaccine: 'Vaccine Update',
						tab_vaccine_help: '  When the vaccine pattern is updated, send an email to notify you.',
						
						tab_error: 'Error Alert',
						tab_error_help: '  Notification mail is sent in case of a function error.'

					},
					admin: {
						help: '  You can set Access control, Language, and Password management here.',
						location_1depth: 'Preferences',
						location_2depth: 'Admin Settings',
						btn_add: 'Add',
						btn_submit: 'Apply',
						btn_update: 'Edit',
						btn_modify: 'Modify',
						btn_delete: 'Delete',
						btn_modify_title: 'Modify', 
						btn_delete_title: 'Delete', 
						btn_close: 'Close',
						
						tab_access_setting: 'Admind Access Control',
						tab_access_setting_help: '  You can set Admin access control here.',
						tab_access_setting_total: 'All',
						tab_access_setting_count: 'Result(s)',
						tab_access_setting_usage: 'Admin Access Control Enabled',
						tab_access_setting_usage_label_switch_on: 'On',
						tab_access_setting_usage_label_switch_off: 'Off',
						tab_access_setting_header_title: 'Policy',
						tab_access_setting_header_allow: 'Allow',
						tab_access_setting_header_deny: 'Block',
						tab_access_setting_header_add: 'Add Policy',
						tab_access_setting_list_ip: 'IP',
						tab_access_setting_list_ip_type: 'IP Types',
						tab_access_setting_list_desc: 'Description',
						tab_access_setting_list_time: 'Time',
						tab_access_setting_list_update: 'Edit',
						tab_access_setting_add_modal_title: 'Add Admin Access Control',
						tab_access_setting_add_modal_ip: 'IP',
						tab_access_setting_add_modal_ip_title: 'IP', 
						tab_access_setting_add_modal_policy: 'Policy',
						tab_access_setting_add_modal_allow: 'Allow',
						tab_access_setting_add_modal_deny: 'Block',
						tab_access_setting_add_modal_ip_type: 'IP Types',
						tab_access_setting_add_modal_desc: 'Description',
						tab_access_setting_add_modal_desc_title: 'Description', 
						tab_access_setting_update_title: 'Edit Admin Access Control',
						tab_access_setting_update_modal_ip: 'IP',
						tab_access_setting_update_modal_policy: 'Policy',
						tab_access_setting_update_modal_allow: 'Allow',
						tab_access_setting_update_modal_deny: 'Block',
						tab_access_setting_update_modal_ip_type: 'IP Types',
						tab_access_setting_update_modal_desc: 'Description',
						tab_access_type_ip: 'IP',
						tab_access_type_netmask: 'Netmask',
						tab_access_type_wildcard: 'Wildcard',
						tab_access_setting_allow_help: '  No value entries on the Allow list, all access will be blocked.',
						tab_access_setting_deny_help: '  No value entries on the Block list, all access will be allowed.',
						
						tab_language_setting: 'Language Settings',
						tab_language_setting_help: '  Choose your preferred languages here.',
						tab_language_setting_title: 'Languages',
						tab_language_setting_ko: 'Korean',
						tab_language_setting_us: 'English',
						tab_language_setting_jp: 'Japanese',
						
						tab_admin_addDel: 'Add/Delete Admin',
						tab_admin_addDel_help: '  You can add Admin accounts here.',
						tab_admin_addDel_total: 'All',
						tab_admin_addDel_count: 'Result(s)',
						tab_admin_addDel_search_all: 'All',
						tab_admin_addDel_search_id: 'Admin ID',
						tab_admin_addDel_search_domain: 'Domain',
						tab_admin_addDel_list_domain_name: 'Domain',
						tab_admin_addDel_list_admin: 'Admin',
						tab_admin_addDel_list_lang: 'Basic Language',
						tab_admin_addDel_list_time: 'Date Created',
						tab_admin_addDel_list_etc: 'Edit/Delete',
						tab_admin_addDel_update_modal_title: 'Modify Admin',
						tab_admin_addDel_update_modal_old_pwd: 'Current Password',
						tab_admin_addDel_update_modal_new_pwd: 'Password',
						tab_admin_addDel_update_modal_new_pwd_confirm: 'Confirm Password',
						tab_admin_addDel_add_modal_title: 'Add admin account',
						tab_admin_addDel_add_modal_domain_name: 'Domain',
						tab_admin_addDel_add_modal_id: 'Admin ID',
						tab_admin_addDel_add_modal_new_pwd: 'Password',
						tab_admin_addDel_add_modal_new_pwd_confirm: 'Confirm Password',
						tab_admin_addDel_del_modal_title: 'Deleting an administrator',
						tab_admin_addDel_del_modal_help: 'Are you sure you want to delete this account?',
						tab_admin_addDel_id_chk_help: 'The ID is already in use.',
						tab_admin_addDel_list_right: 'Right',
						tab_admin_addDel_domain_admin: 'Domain Admin',
						tab_admin_addDel_system_admin: 'System Manager',
						tab_admin_addDel_domain_list_none: 'No Domain',
						tab_admin_addDel_modify_passwd: 'Change Password',
						tab_admin_addDel_modify_right: 'Change Permissions',
						
						tab_password_manager: 'Password Management',
						tab_password_manager_help: '  Setting up the password properties here.',
						tab_password_manager_length_min: 'Minimum length of password',
						tab_password_manager_special_ch: 'Minimum length of special character',
						tab_password_manager_length_num: 'Minimum length of number',
						tab_password_manager_content_help: '  Common : 0 is unlimited',
						tab_password_manager_result: 'Successful',
						tab_password_manager_result_help: 'Changes applied.',
						
						tab_password_setting: 'Change Password',
						tab_password_setting_help: '  Admin account＇s password can be changed here.',
						tab_password_setting_old_pwd: 'Current Password',
						tab_password_setting_old_pwd_title: 'Current Password', 
						tab_password_setting_new_pwd: 'New Password',
						tab_password_setting_new_pwd_title: 'New Password', 
						tab_password_setting_new_pwd_confirm: 'Confirm Password',
						tab_password_setting_new_pwd_confirm_title: 'Confirm Password', 
						tab_password_setting_length_msg1: 'Password must have at least ',
						tab_password_setting_length_msg2: 'characters.',
						tab_password_setting_special_help: 'Must have at least one special character.',
						tab_password_setting_number_help: 'Must have at least one number.',
						tab_password_setting_pwd_chk_help: 'Password matched.',
						tab_password_setting_pwd_unchk_help: 'Incorrect password.',
						tab_password_setting_pwd_complate_help: 'The password has been successfully changed.'

					},
					equipment: {
						help: '  You can check the equipment operation and its status here.',
						location_1depth: 'Preferences',
						location_2depth: 'Equipment Settings',
						total: 'All',
						count: 'Result(s)',
						btn_add: 'Add',
						btn_submit: 'Apply',
						btn_close: 'Close',
						edit_title: 'Edit', 
						delete_title: 'Delete', 
						
						search_placeholder: 'Please enter an equipment name.',
						list_serial: 'Equipment specific number',
						list_default: 'Master equipment status',
						list_token: 'Equipment connection key value',
						list_mngr_url: 'mngr url',
						list_seg_url: 'seg url',
						list_name: 'Host name',
						list_ip: 'Target Equipment IP',
						list_port: 'Port',
						list_edit: 'Edit/Delete',
						
						add_modal_title: 'Add Equipment',
						add_modal_name: 'Host name',
						add_modal_ip: 'IP',
						add_modal_port: 'Port',
						add_modal_master: 'Master',
						add_modal_sub: 'Sub',
						
						update_modal_title: 'Equipment Update',
						
						delete_modal_title: 'Equipment Delete',
						delete_modal_msg: 'Are you sure you want to delete the equipment?',
						overlap_msg: 'The unique number of the equipment is already registered. Please try again.',
						add_update_modal_help: '  Equipment name cannot be duplicated.'
					},
					user: {
						help: '  You can modify the information of users and organization.',
						location_1depth: 'Preferences',
						location_2depth: 'User Settings',
						total: 'All',
						count: 'Result(s)',
						btn_add: 'Add',
						btn_submit: 'Apply',
						btn_update: 'Update',
						btn_modify: 'Modify',
						btn_delete: 'Delete',
						btn_modify_title: 'Modify', 
						btn_delete_title: 'Delete', 
						btn_close: 'Close',
						btn_add_group: 'Add Group',
						btn_add_user: 'User Creation',
						add_user_modify: 'User Info. Add',
						edit_user_modify: 'User Info. Edit',
						list_name: 'Name',
						list_group_name: 'Group Name',
						list_id: 'ID',
						list_register_date: 'Creation Date',
						list_modify: 'Modify',
						organization: 'Organization',
						modal_add_user_inidividual: 'Add Individual',
						modal_add_user_bundle: 'Add Batch',
						modal_add_user_sample_down: 'Form Download',
						modal_name: 'Name',
						modal_group_name: 'Group Name',
						modal_id: 'ID',
						modal_password: 'Password',
						modal_password2: 'Confirm password',
						modal_register_date: 'Creation Date',
						modal_last_modify_date: 'Last Modified',
						modal_group_manager: 'Group Management',
						modal_modify_group: 'Modify Group Name',
						modal_del_title: 'Delete User',
						modal_del_body: 'Are you sure you want to delete this?',
						default_group_name: 'Unclassified'

					},
					license: {
						help: '  You can see the details of product and its license information here. Any changes of MAC and IP information will be affected on the service.',
						location_1depth: 'Preferences',
						location_2depth: 'License Settings',
						btn_submit: 'Apply',
						
						list_company_name: 'Client Company',
						list_version: 'Product Version',
						list_serial: 'License Serial Number',
						list_validDate: 'Maintenance Period',
						list_maxValidDate: 'Expiry Date', 
						list_mac: 'MAC',
						list_ip: 'IP',
						list_maxUser: 'Number of Users',
						list_limit_user: 'Unlimited', 
						list_openSources: 'Open Source',
						list_copyright_info: 'Copyright Info.',
						list_license_update: 'License Update',
						list_period: 'Product expiration date',
						list_default_lang: 'Product Default Language',
						
						processing: 'In Progress', 
						select_file: 'Select file',
						upload_file: 'Uploading files.', 
						upload_file_select: 'Choose file to upload.', 
						error: 'Error', 
						result: 'Result', 
						result_msg1: 'Uploaded successfully.', 
						result_msg2: 'Upload failed.'

					},
					spamPolicy: {
						help: '  You can set Spam policy here.',
						location_1depth: 'Policy Management',
						location_2depth: 'Spam Policy',
						btn_add: 'Add',
						btn_del: 'Delete',
						btn_close: 'Close',
						btn_submit: 'Apply',
						
						etc_string: '',
						tab_subject_list: 'Subject List',
						
						tab_common: 'Common',
						tab_grey_listing: 'Restricted Access',
						tab_rbl: 'RBL',
						tab_spf: 'SPF',
						tab_scam: 'Scam',
						tab_helo: 'HELO Domain',
						tab_sender: 'Sender',
						tab_recver: 'Recipient',
						tab_relay: 'Relay',
						tab_contents: 'Mail Content',
						tab_common_help: '  You can modify the common information of spam blockers.',
						tab_grey_listing_help: '  Performs control over SMTP connections.',
						tab_rbl_help: '  View the Realtime Black List (RBL) for the outgoing IP.',
						tab_spf_help: '  Validates outgoing IP.',
						tab_scam_help: '  Validates sender mail addresses.',
						tab_helo_help: '  Validates SMTP HELO information.',
						tab_sender_help: '  Validates sender domain and mail address.',
						tab_recver_help: '  Validates recipient domain and mail address.',
						tab_relay_help: '  The mail server is checked for theft.',
						tab_contents_help: '  I check the contents of the mail.',
						
						tab_exception: 'Exception',
						tab_exception_help: '  You can set Exceptions handling of mail here.',
						tab_exception_list_date: 'Date',
						tab_exception_list_all: 'All',
						tab_exception_list_division: 'Policy',
						tab_exception_list_rule_name: 'Rule Name',
						tab_exception_list_filter: 'Filter',
						tab_exception_list_process: 'Handling Option',
						tab_exception_list_register: 'Register',
						tab_exception_list_range: 'Target Range',
						tab_exception_list_target_type: 'Target Type',
						tab_exception_list_etc: 'Edit/Delete',
						tab_exception_add_modal_title: 'Add Exceptional Rules',
						tab_exception_add_modal_rule_name: 'Rule Name',
						tab_exception_add_modal_bound: 'Target range',
						tab_exception_add_modal_filter: 'Policy',
						tab_exception_add_modal_filter_ip: 'IP',
						tab_exception_add_modal_filter_sender: 'Sender',
						tab_exception_add_modal_filter_recver: 'Recipient',
						tab_exception_add_modal_filter_domain: 'Domain',
						tab_exception_add_modal_filter_email: 'Email',
						tab_exception_add_modal_filter2_or: 'included',
						tab_exception_add_modal_filter2_and: 'matched',
						tab_exception_add_modal_filter2_start: 'started',
						tab_exception_add_modal_filter2_end: 'ended',
						tab_exception_add_modal_ingore: 'Case sensitive',
						tab_exception_add_modal_ingore_true: 'Case sensitive',
						tab_exception_add_modal_ingore_false: 'Case-insensitive',
						tab_exception_add_modal_process: 'Handling Option',
						tab_exception_add_modal_process_label_switch_on: 'Allow',
						tab_exception_add_modal_process_label_switch_off: 'Block',
						tab_exception_add_modal_register: 'Register',
						tab_exception_add_modal_range: 'Target Range',
						tab_exception_add_modal_add_range: 'Add Target',
						tab_exception_add_modal_range_label_switch_on: 'All',
						tab_exception_add_modal_range_label_switch_off: 'User',
						tab_exception_update_modal_title: 'Modify Exceptional Rules',
						tab_exception_update_modal_rule_name: 'Rule Name',
						tab_exception_update_modal_filter: 'Filter',
						tab_exception_update_modal_filter_ip: 'IP',
						tab_exception_update_modal_filter_domain: 'Domain',
						tab_exception_update_modal_filter_email: 'Email',
						tab_exception_update_modal_process: 'Handling Option',
						tab_exception_update_modal_process_label_switch_on: 'Allow',
						tab_exception_update_modal_process_label_switch_off: 'Block',
						tab_exception_update_modal_register: 'Register',
						tab_exception_update_modal_range: 'Target Range',
						tab_exception_update_modal_range_label_switch_on: 'All',
						tab_exception_update_modal_range_label_switch_off: 'Individual',
						tab_exception_user_modal_title: 'User Selection',
						
						tab_block: 'Blocking',
						tab_block_help: '  You can set blocking for emails here.',
						tab_block_add_modal_title: 'Add Blocking Rules',
						tab_block_update_modal_title: 'Modify Blocking Rules',
						
						tab_smtp: 'SMTP Stage Blocking',
						tab_smtp_help: '  You can set SMTP stage spam blocking such as DNS(Domain Name System), SPF(Sender Policy Framework), and RBL(Real-time Blocking List).',
						tab_smtp_default_setting: 'Default Setting',
						tab_smtp_sender_domain: 'Sender Domain Check',
						tab_smtp_sender_domain_label_switch_on: 'On',
						tab_smtp_sender_domain_label_switch_off: 'Off',
						tab_smtp_recver_domain: 'Recipient Domain Check',
						tab_smtp_recver_domain_label_switch_on: 'On',
						tab_smtp_recver_domain_label_switch_off: 'Off',
						tab_smtp_helo_domain: 'HELO Domain Check',
						tab_smtp_helo_domain_label_switch_on: 'On',
						tab_smtp_helo_domain_label_switch_off: 'Off',
						tab_smtp_domain: 'Domain Availability Check',
						tab_smtp_domain_label_switch_on: 'On',
						tab_smtp_domain_label_switch_off: 'Off',
						tab_smtp_spf: 'SPF Enabled',
						tab_smtp_spf_label_switch_on: 'On',
						tab_smtp_spf_label_switch_off: 'Off',
						tab_smtp_spf_not_set_reject: 'Block domains that do not register SPF rules',
						tab_smtp_rbl: 'RBL',
						tab_smtp_rbl_label_switch_on: 'On',
						tab_smtp_rbl_label_switch_off: 'Off',
						tab_smtp_rbl_list_date: 'Date',
						tab_smtp_rbl_list_site: 'RBL Site',
						tab_smtp_rbl_list_register: 'Register',
						tab_smtp_rbl_list_update_del: 'Edit/Delete',
						tab_smtp_rbl_add_modal_title: 'Add RBL Site',
						tab_smtp_rbl_update_modal_title: 'Edit RBL Site',
						tab_smtp_sender: 'Sender Block',
						tab_smtp_sender_setting: 'Sender Block',
						tab_smtp_sender_label_switch_on: 'On',
						tab_smtp_sender_label_switch_off: 'Off',
						tab_smtp_sender_list_date: 'Date',
						tab_smtp_sender_list_sender: 'Sender',
						tab_smtp_sender_list_register: 'Register',
						tab_smtp_sender_list_update_del: 'Edit/Delete',
						tab_smtp_sender_list_email: 'Email',
						tab_smtp_recver: 'Recipient Block',
						tab_smtp_recver_setting: 'Recipient Block',
						tab_smtp_recver_label_switch_on: 'On',
						tab_smtp_recver_label_switch_off: 'Off',
						tab_smtp_recver_list_date: 'Date',
						tab_smtp_recver_list_recver: 'Recipient',
						tab_smtp_recver_list_register: 'Register',
						tab_smtp_recver_list_update_del: 'Edit/Delete',
						tab_smtp_recver_list_email: 'Email',
						tab_smtp_limit_recv: 'Recipient Limits',
						tab_smtp_limit_recv_help: 'User(s)',
						tab_smtp_msg_size: 'Message Size',
						tab_smtp_msg_size_help: 'MB',
						tab_smtp_limit_waypoint_server: 'Waypoint Server Limts',
						tab_smtp_limit_waypoint_server_help: 'Server(s)',
						tab_smtp_account_check: 'Scan Internal User Accounts',
						tab_smtp_relay_inspection: 'Relay Inspection',
						tab_smtp_relay_inspection_item1: 'Allow Local IP',
						tab_smtp_relay_inspection_item2: 'Allow SMTP-certified users',
						tab_smtp_relay_inspection_item3: 'Allow only internal sender domains',
						tab_smtp_relay_inspection_item4: 'Relay Allowed IP',
						
						tab_pattern: 'Pattern Filter',
						tab_pattern_help: '  You can set Pattern option here.',
						tab_pattern_usage: 'Enabled',
						tab_pattern_usage_label_switch_on: 'On',
						tab_pattern_usage_label_switch_off: 'Off',
						tab_pattern_version: 'Version',
						tab_pattern_update_time: 'Update Time',
						
						tab_content: 'Content Filter',
						tab_content_help: '  You can set Content filter to block email contents with specific word and text strings.',
						tab_content_usage: 'Content Filter',
						tab_content_usage_label_switch_on: 'On',
						tab_content_usage_label_switch_off: 'Off',
						tab_content_etc: 'Filter Add/Delete',
						tab_content_search_all: 'All',
						tab_content_search_name: 'Filter Name',
						tab_content_search_info: 'Filter Info.',
						tab_content_search_register: 'Register',
						tab_content_search_time: 'Date',
						tab_content_search_object: 'Apply Target',
						tab_content_search_rule: 'Apply Rule',
						tab_content_search_usage: 'Enabled',
						tab_content_list_name: 'Filter Name',
						tab_content_list_info: 'Filter Info.',
						tab_content_list_mail_type: 'Mail Type',
						tab_content_list_register: 'Register',
						tab_content_list_time: 'Date',
						tab_content_list_object: 'Apply Target',
						tab_content_list_rule: 'Apply Rule',
						tab_content_list_usage: 'Edit/Delete',
						tab_content_add_modal_title: 'Add Content Filter',
						tab_content_add_modal_name: 'Filter Name',
						tab_content_add_modal_if1: 'Filter Condition',
						tab_content_add_modal_if1_subject: 'Title',
						tab_content_add_modal_if1_url: 'URLs on Mail Body',
						tab_content_add_modal_if1_sender_env: 'Sender(Header) Domain',
						tab_content_add_modal_if1_recver_env: 'Recipient(Header) Domain',
						tab_content_add_modal_if1_sender_head: 'Sender(Header)',
						tab_content_add_modal_if1_recver_head: 'Recipient(Header)',
						tab_content_add_modal_if1_cc: 'Multiple Recipients(CC-Header)',
						tab_content_add_modal_if1_total_header: 'Full Header',
						tab_content_add_modal_if1_header: 'Header Values',
						tab_content_add_modal_if1_content_type: 'Content-Type',
						tab_content_add_modal_if1_content: 'Body',
						tab_content_add_modal_if1_mail_size: 'Mail Size',
						tab_content_add_modal_if1_ip: 'IP',
						tab_content_add_modal_if1_file_name: 'Attachment Name',
						tab_content_add_modal_if1_file_content: 'Attachment Content',
						tab_content_add_modal_if1_smtp_id: 'SMTP Authentication ID',
						tab_content_add_modal_if1_country: 'Country from',
						tab_content_add_modal_if1_extension: 'Attachment File Extension',
						tab_content_add_modal_if2_include: 'included',
						tab_content_add_modal_if2_not_include: 'not included',
						tab_content_add_modal_if2_same: 'matched',
						tab_content_add_modal_if2_not_same: 'not matched',
						tab_content_add_modal_if2_start: 'started',
						tab_content_add_modal_if2_not_start: 'not started',
						tab_content_add_modal_if2_end: 'ended',
						tab_content_add_modal_if2_not_end: 'not ended',
						tab_content_add_modal_if2_fit: 'fitted(Regular Expression)',
						tab_content_add_modal_if2_not_fit: 'not fitted(Reguar Expression)',
						tab_content_add_modal_if2_fit_isCase: 'fitted(Regular Expression Case-sensitive)',
						tab_content_add_modal_if2_not_fit_isCase: 'not fitted(Regular Expression Case-sensitive)',
						tab_content_add_modal_if2_not_existence: 'not existed',
						tab_content_add_modal_if2_english: 'in English',
						tab_content_add_modal_calculate: 'Calculation Type',
						tab_content_add_modal_calculate_once: 'satisfied at least one condition',
						tab_content_add_modal_calculate_all: 'satisfied all conditions',
						tab_content_add_modal_mail_class: 'Mail Class',
						tab_content_add_modal_mail_class_admin: 'Process as Admin Defined Mail',
						tab_content_add_modal_mail_class_spam: 'Process as Spam Mail',
						tab_content_add_modal_mail_class_spammy: 'Process as Spammy Mail',
						tab_content_add_modal_register: 'Register',
						tab_content_add_modal_date: 'Date',
						tab_content_add_modal_object: 'Apply Target',
						tab_content_add_modal_object_label_switch_on: 'All',
						tab_content_add_modal_object_label_switch_off: 'Individual',
						tab_content_add_modal_rule: 'Apply Rule',
						tab_content_add_modal_rule_label_switch_on: 'Allow',
						tab_content_add_modal_rule_label_switch_off: 'Block',
						tab_content_add_modal_usage: 'Enabled',
						tab_content_add_modal_usage_label_switch_on: 'On',
						tab_content_add_modal_usage_label_switch_off: 'Off',
						tab_content_update_modal_title: 'Modify Content Filter',
						
						tab_process_method: 'Default Processing Options',
						tab_process_method2: 'Processing method',
						tab_process_method_help: '  Define common treatment methods.',
						tab_process_method_select_option_common: 'Use default settings',
						tab_process_method_select_option_default: 'Block Sender',
						tab_process_method_select_option_tag: 'Change Title',
						tab_process_method_select_option_add_header: 'Add Header Value',
						tab_process_method_select_option_subject: 'Send notification',
						tab_process_method_modify_return: 'Modify Return Value',
						tab_process_method_return_policy_name: 'Policy',
						tab_process_method_return_default_msg: 'Default Message',
						tab_process_method_add_header_name: 'Header Name : ',
						tab_process_method_add_header_value: 'Header Value : ',
						
						tab_tag_title: 'Tagging',
						tab_tag_help: '  Add a value to the header that allows you to categorize mail.',
						tab_tag_use: 'Tagging treatment',
						tab_tag_sort: 'Sortation',
						tab_tag_type: 'Type',
						tab_tag_type_ip: 'IP',
						tab_tag_type_domain: 'Domain',
						tab_tag_type_email: 'Email',
						tab_tag_spamTags: 'Tagging settings',
						tab_tag_spamTags_item: 'Header value',
						tab_tag_spamTags_item2: 'Header name',
						tab_tag_spamTags_item3: 'Modify/Delete',
						tab_tag_spamTags_default: 'Default',
						tab_tag_spamTags_default_usage: 'Default Usage',
						tab_tag_add_spamTags: 'Add Tagging',
						tab_tag_update_spamTags: 'Tagging Modify',
						tab_tag_rule: 'Policy',
						tab_tag_desc: 'Explanation',
						tab_tag_setting: 'Status information',
						tab_tag_select_all: 'ALL',
						tab_tag_select_rule: 'Rule',
						tab_tag_select_desc: 'Explanation',
						tab_tag_add_rule: 'Add Tagging Rule',
						tab_tag_update_rule: 'Tagging rule modification',
						tab_tag_graph: 'Tag Status',
						tab_tag_cond: 'Condition',
						tab_tag_del_rule: 'Delete Tagging Rule',
						
						tab_tag_no_sort_msg: 'Please specify a classification.',
						tab_tag_no_type_msg: 'Please specify the type.',
						tab_tag_no_rule_msg: 'Please enter a policy.',
						tab_tag_no_overlap: 'Classification or header name is redundant. Please enter again.',
						tab_tag_no_overlap2: 'Duplicate policy. Please re-enter.',
						tab_tag_delete_msg: 'When deleting the tag, the delimited value is ',
						tab_tag_delete_msg2: ' Rules are also deleted. Are you sure you want to delete it?',
						tab_tag_help2: '  The default value is set for targets that do not specify a rule.',
						
						tab_all_to: 'To',
						tab_all_to2: 'To'

					},
					spamPolicyProcessMethod: {
						recver_exist: 'Check Recipient Account',
						eml_size: 'Message Size',
						relay: 'Relay',
						spf: 'SPF',
						pattern: 'Pattern',
						sender_domain_resolver: 'Sender Domain',
						recver_domain_resolver: 'Recipient Domain',
						grey_listing: 'Grey Listing',
						user_reject: 'Custom blocked',
						helo_resolver: 'HELO Domain',
						contents: 'Contents',
						max_hop: 'Number of waypoint server limit',
						max_recver: 'Number of recipients limit',
						rbl: 'RBL',
						sender_exist: 'Check Sender Account',
						
						sender_domain_method: 'How to process the sender′s domain',
						sender_exist_method: 'How to check and process the sender′s account',
						recver_domain_method: 'How to process recipient domains',
						recver_exist_method: 'How to check and process recipient accounts',
						recver_max_method: 'How to deal with restrictions on the number of recipients',
						content_eml_size: 'How to handle message size',
						content_max_hop: 'How to handle limit number of servers',
						content_contents: 'How to handle content',
						content_pattern: 'Pattern Handling'
					},
					virusPolicy: {
						location_1depth: 'Policy Management',
						location_2depth: 'Malware Policy',
						
						
						help: '  Malware scanning function for sending and receiving domains.',
						usage: 'Enabled',
						usage_label_switch_on: 'On',
						usage_label_switch_off: 'Off',
						version: 'Version',
						update_time: 'Update Time',
						vaccine_name: 'Vaccine Name',
						version_info: 'Vaccine Version',
						bd: 'BitDefender',
						tv: 'TurboVaccine',
						file_size_limit: 'File Size Limit',
						file_size_limit_help: '  If the file is larger than the size you set, you do not perform a virus scan.',
						
						tab_default: 'Default Setting',
						tab_process_method: 'Malware Scan',
						tab_process_method2: 'Encrypted File Scan',
						tab_process_method_help: '  You can set processing option and response code of malware scanning policy.',
						tab_process_method_help2: '  You can set the encryption file processing method',
						tab_process_method_select_option_default: 'Block Sender',
						tab_process_method_select_option_del: 'Delete',
						tab_process_method_select_option_text: 'Text Convert',
						tab_process_method_select_option_pass: 'Original mail delivered',
						tab_process_method_textfile_value: 'File Content : ',
						tab_process_method_textfile_name: 'File Name : ',
						
						msg_title: 'Processing result',
						msg_content: 'Do you want to apply this setting?'

					},
					cdrPolicy: {
						help: '  CDR(Content Disarm & Reconstruction) is a computer security technology that removes malwares and threats. All unauthorized file components will be removed by system definitions and policies.',
						location_1depth: 'Policy Management',
						location_2depth: 'CDR Policy',
						btn_add: 'Add',
						btn_close: 'Close',
						btn_submit: 'Apply',
						
						tab_usage: 'Enabled',
						tab_label_switch_on: 'On',
						tab_label_switch_off: 'Off',

					},
					
					urlPolicy: {
						help: '',
						location_1depth: 'Policy Management',
						location_2depth: 'URL Harmfulness Policy',
						
						tab_usage: 'Enabled',
						tab_label_switch_on: 'On',
						tab_label_switch_off: 'Off',
					},
					
					isolationPolicy: {
						help: '',
						location_1depth: 'Policy Management',
						location_2depth: 'Document isolation Policy',
						
						tab_usage: 'Enabled',
						tab_label_switch_on: 'On',
						tab_label_switch_off: 'Off',
					},

					mailBodyPolicy: {
						help: '  You can set a CDR policy.',
						location_1depth: 'Policy Management',
						location_2depth: 'Mail Body Policy',
						switch_on: 'On',
						switch_off: 'Off',
						switch_reconfiguration: 'Reconfiguration',
						switch_annotation_processing: 'Annotation Procession',
						switch_no_processing: 'No Processiong',
						switch_on_the_go_analysis: 'On The Go Analysis',
						switch_removal: 'Removal',
						switch_allow: 'Allow',
						btn_close: 'Close',
						btn_submit: 'Submit',
						select_domain: 'Select Domain',
						
						tab_html: 'HTML Mail',
						tab_html_banner: 'Result View Banner',
						tab_html_image: 'Image Processing',
						tab_html_script: 'Remove Script/Object',
						tab_html_beacon: 'Remove Web Beacon',
						tab_html_hyperlink: 'Hyperlink',
						tab_html_preview: 'Preview',
						
						tab_html_modal_link_del_title: 'Link Removal Message',
						tab_html_modal_link_del_category: 'Message',
						tab_html_modal_link_del_default: 'Use default settings',
						tab_html_modal_safe_browsing_api_key: 'SafeBrowsing API Key',
						tab_html_modal_safe_browsing_client_id: 'SafeBrowsing Client ID',
						
						tab_text: 'Text Mail',
						tab_text_banner: 'Include Result View URL'
					},
					
					attachedFilePolicy: {
						help: '  You can set a CDR policy.',
						location_1depth: 'Policy Management',
						location_2depth: 'Attached File Policy',
						switch_on: 'On',
						switch_off: 'Off',
						switch_allow: 'Allow',
						switch_block: 'Block',
						switch_removal: 'Removal',
						switch_keep: 'Keep',
						btn_submit: 'Submit',
						select_domain: 'Select Domain',
						
						tab_default: 'Default Setting',
						tab_default_reconfiguration: 'Reconfiguration Of Documents',
						tab_default_file_size: 'File Size Limit',
						tab_default_file_size_unit: '(MB)',
						tab_default_limit_size: 'If the size limit is exceeded',
						tab_default_extension_modulation: 'Extension modulation file',
						tab_default_html_file: 'HTML File',
						tab_default_script_file: 'Script File',
						tab_default_script_file_help: '  Separated by semicolon (";")',
						tab_default_extensions_not_supported: 'Extensions not supported',
						tab_default_isolation: 'Safety Document Viewer',
						
						tab_office: 'MS Office',
						tab_office_obj: 'Inserted object',
						tab_office_macro: 'Macro',
						tab_office_encrypt_doc: 'Password Settings Document',
						tab_office_dde: 'DDE automatic command language',
						tab_office_excel_shape: 'Excel SHAPE',
						
						tab_pdf: 'PDF',
						tab_pdf_java_script: 'JAVA Script',
						tab_pdf_annotations: 'Annotations',
						tab_pdf_actions: 'Actions',
						
						tab_zip: 'ZIP',
						tab_zip_supported: 'Supported Zip extensions',
						tab_zip_encrypt_zip: 'Password Settings Zip File',
						tab_zip_include_file: 'Number of file inclusion limits',
						tab_zip_include_file_unit: '(ea)',
						tab_zip_include_file_help: '  0 is unlimited.',
						
						tab_etc: 'Etc.',
						tab_etc_hancom: 'Hancom Office',
						tab_etc_ichitaro: 'ICHITARO',
						tab_etc_cad: 'CAD File (DWG,DXF)',
					},
					
					cdrDetailPolicy: {
						help: '  You can set up CDR detailed policies.',
						location_1depth: 'Policy management',
						location_2depth: 'CDR Detail Policy',

						btn_submit: 'Submit',

						label_switch_on: 'ON',
						label_switch_off: 'OFF',
						label_switch_deny: 'Deny',
						label_switch_origin: 'Permit',
						label_switch_download: 'DOWNLOAD',
						label_switch_comment: 'COMMENT',
						label_switch_nothing: 'NOTHING',
						label_switch_image: 'IMAGE',
						label_switch_string: 'STRING',

						sd_doc_op_mode: 'Documentless Mode',
						sd_doc_limit_size: 'Decontamination limit size',
						sd_doc_limit_mode: 'Processing method if size is exceeded',
						cqms_nor_option_macro: 'Remove macros from within a document',
						sd_doc_obj_mode: 'Remove objects in the document',
						sd_doc_ddeauto_block_mode: 'Delete DDEAUTO',
						sd_enc_doc_mode: 'Block password-protected documents',
						sd_enc_zip_mode: 'Block password-protected zip files',
						sd_attached_html_handling:'Handling of attached HTML files',
						sd_script_block_ext_list:'Set blocking script extension',
						sd_ext_mode:'Extension forgery check',
						sd_except_ext:'Extensions that do not check forgeries',
						sd_nosup_ext_mode:'Block unsupported extensions',
						cqms_nosup_except_ext:'Extensions not blocked by unsupported extensions',
						sd_original_file_import:'Send original without harming',
						sd_use_original_zip_password:'Zip harmless and compress using the same password',
						sd_deny_n_files_over_in_zip:'If the file in the ZIP exists above the set value, block',
						sd_supported_zip_ext:'Extensions recognized as ZIP files',
						sd_break_filename_in_zip:'File processing of file names not recognized by ZIP',
						sd_doc_old:'Handling files generated in MS Office 97 and earlier',
						sd_excel_remove_shape_control:'Remove ActiveX controls from Excel documents',
						sd_pdf_remove_actions:'Remove Action from PDF document',
						sd_pdf_remove_annotations:'Uncommenting PDF documents',
						sd_pdf_remove_java_script:'Remove JAVA Script from PDF document',
						sd_remove_script_tag_from_mail_contents:'Script / ActiveX Object Removal Policy',
						sd_remove_web_beacon_from_mail_contents:'WEB BEACON removal policy',
						sd_remove_link_from_mail_contents:'Remove LINK in HTML body',
						sd_removed_link_alert_message:'LINK removal instructions message',
						sd_image_sanitize_method_from_html:'How to handle download images in the HTML body',
						annotate_all_link_if_more_than_certain_number:'A comment processing when there are N or more links',
						sd_html_contents_preview_on_outlook:'Show Outlook Preview content',
						sd_show_result_url_from_mail_contents:'Display harmless result URL link in message body',
						sd_sanitize_result_url_host_for_mail_contents:'URL setting of harmless result screen',
						sd_create_url_from_txt_mail	:'Generate harmless result page URL',
						sd_result_url_filename	:'Decontamination result page URL File name',
						sd_create_html_from_mail:'Generate HTML file of harmless result page',
						sd_create_result_link_method_from_html:'How to display the harmless result page in the HTML body',
						sd_result_link_name_from_html:'Linkage setting of harmonization result page (valid only when link display method is STRING)',
						sd_add_prefix_suffix_to_resultlink_in_txtmail:'TEXT Adds a string before and after page URL',
						sd_safe_browsing_api_key:'SafeBrowsing API Key',
						sd_safe_browsing_client_id:'SafeBrowsing Client ID',
						no:'PDF conversion function',
						no:'Remove external links within a Word document',
						no:'If the document does not contain any threats, the original import policy',
					},
					
					certification: {
						title: 'Enter Password',
						help: '  2-step verification needed to access on preference settings.',
						err_msg: 'Incorrect password, please try again.',
						btn_confirm: 'OK',
						btn_close: 'Close'

					},
					status: {
						event_status_admin_login: 'Admin Login',
						event_status_admin_logout: 'Admin Logout',
						event_status_admin_modify: 'Admin Modify',
						event_status_domain_admin_login: 'Domain Admin Login',
						event_status_domain_admin_logout: 'Domain Admin Logout',
						event_status_user_login: 'User Login',
						event_status_user_logout: 'User Logout',
						event_status_add_user: 'User Registration',
						event_status_exuser_login: 'Recipient Login',
						event_status_mail_view: 'View Mail',
						event_status_file_download: 'Attachment Download',
						event_status_processing_result: 'SEG processing result check',
						event_status_svc_start: 'Start Service',
						event_status_svc_stop: 'Stop Service',
						event_status_set_db_config: 'Change Settings of DB＇s CONFIG',
						event_status_log_down: 'Log Download',
						event_status_set_auto_del: 'Change Settings of Auto Delete',
						event_status_set_smtp: 'Change Settings of SMTP',
						event_status_set_config: 'Change Settings of CONFIG',
						event_status_set_template: 'Change Settings of Template',
						event_status_admin_user_add: 'Add Admin Account',
						event_status_admin_user_del: 'Delete Admin Account',
						event_status_admin_user_modify: 'Modify Admin Account',
						event_status_domain_admin_user_add: 'Add Domain Admin Account',
						event_status_domain_admin_user_del: 'Delete Domain Admin Account',
						event_status_domain_admin_user_modify: 'Modify Domain Admin Account',
						event_status_user_add: 'Add User Account',
						event_status_user_del: 'Delete User Account',
						event_status_user_modify: 'Modify User Account',
						event_status_domain_add: 'Add Domain',
						event_status_domain_del: 'Delete Domain',
						event_status_domain_modify: 'Modify Domain',
						event_status_acl_add: 'Add Access Rights',
						event_status_acl_del: 'Delete Access Rights',
						event_status_acl_modify: 'Modify Access Rights',
						event_status_org_add: 'Add Organization',
						event_status_org_del: 'Delete Organization',
						event_status_org_modify: 'Modify Organization',
						event_status_rule_add: 'Add Spam Rules',
						event_status_rule_del: 'Delete Spam Rules',
						event_status_rule_modify: 'Modify Spam Rules',
						event_status_filter_add: 'Add Spam Filter',
						event_status_filter_del: 'Delete Spam Filter',
						event_status_filter_modify: 'Modify Spam Filter',
						event_status_equipment_add: 'Add Equipment',
						event_status_equipment_del: 'Delete Equipment',
						event_status_equipment_modify: 'Modify Equipment',
						
						event_status_admin_login_err: 'Admin Login Error',
						event_status_admin_logout_err: 'Admin Logout Error',
						event_status_admin_modify_err: 'Admin Modify Error',
						event_status_domain_admin_id_err: 'Domain Admin ID Error',
						event_status_domain_admin_pw_err: 'Domain Admin Password Error',
						event_status_user_login_err: 'User Login Error',
						event_status_user_logout_err: 'User Logout Error',
						event_status_add_user_err: 'User Registration Error',
						event_status_user_id_err: 'User ID Error',
						event_status_user_pw_err: 'User password error',
						event_status_exuser_login_err: 'Recipient Login Error',
						event_status_mail_view_err: 'View Mail Error',
						event_status_file_download_err: 'Attachment Download Error',
						event_status_processing_result_err: 'SEG processing result lookup error',
						event_status_svc_start_err: 'Start Service Error',
						event_status_svc_stop_err: 'Stop Service Error',
						event_status_set_db_config_err: 'Change Settings of DB＇s CONFIG Error',
						event_status_log_down_err: 'Log Download Error',
						event_status_set_auto_del_err: 'Change Settings of Auto Delete Error',
						event_status_set_smtp_err: 'Change Settings of SMTP Error',
						event_status_set_config_err: 'Change Settings of CONFIG Error',
						event_status_set_template_err: 'Change Settings of Template Error',
						event_status_admin_user_add_err: 'Add Admin Account Error',
						event_status_admin_user_del_err: 'Delete Admin Account Error',
						event_status_admin_user_modify_err: 'Modify Admin Account Error',
						event_status_user_add_err: 'Add User Account Error',
						event_status_user_del_err: 'Delete User Account Error',
						event_status_user_modify_err: 'Modify User Account Error',
						event_status_domain_add_err: 'Add Domain Error',
						event_status_domain_del_err: 'Delete Domain Error',
						event_status_domain_modify_err: 'Modify Domain Error',
						event_status_acl_add_err: 'Add Access Rights Error',
						event_status_acl_del_err: 'Delete Access Rights Error',
						event_status_acl_modify_err: 'Modify Access Rights Error',
						event_status_org_add_err: 'Add Organization Error',
						event_status_org_del_err: 'Delete Organization Error',
						event_status_org_modify_err: 'Modify Organization Error',
						event_status_rule_add_err: 'Add Spam Rules Error',
						event_status_rule_del_err: 'Delete Spam Rules Error',
						event_status_rule_modify_err: 'Modify Spam Rules Error',
						event_status_filter_add_err: 'Add Spam Filter Error',
						event_status_filter_del_err: 'Delete Spam Filter Error',
						event_status_filter_modify_err: 'Modify Spam Filter Error',
						event_status_equipment_add_err: 'Add Equipment Error',
						event_status_equipment_del_err: 'Delete Equipment Error',
						event_status_equipment_modify_err: 'Modify Equipment Error',
						
						event_status_err_unknown: 'Unknown error'

					},
					recordStatus: {
						auth_fail: 'Authentication failed',
						sender_unknown: 'Unknown sender',
						receiver_unknown: 'Unknown recipient',
						relay_deny: 'Relay denied',
						over_eml_size: 'Exceeded mail size',
						over_hop_count: 'Exceeded maximum number of waypoint server',
						send_email: 'Mail received',
						queued: 'Queued',
						queued_seg: 'SEG queded',
						queued_mirror: 'Mirroring',
						rep_saved: 'Save backup',
						queued_seg_in: 'Protection Request',
						queued_seg_out: 'CDR Request',
						seg_virus_unset: 'Malware scanning disabled',
						seg_virus_pass: 'Malware scanning - Normal',
						seg_virus_deleted: 'Malware files deleted', 
						seg_virus_disinfected: 'Malware disinfected',
						seg_virus_infected: 'Malware infected',
						seg_virus_suspected: 'Malware suspicious',
						seg_virus_encryption: 'Encrypted file',
						seg_requested: 'SEG process request',
						seg_grey_unset: 'GREY disabled',  
						seg_grey_pass: 'GREY normal', 
						seg_grey_reject: 'GREY blocked', 
						seg_grey_except: 'GREY in exception',
						seg_rbl_unset: 'RBL disabled',
						seg_rbl_pass: 'RBL passed',
						seg_rbl_reject: 'RBL blocked',
						seg_rbl_except: 'RBL in exception',
						seg_spf_unset: 'SPF disabled',
						seg_spf_pass: 'SPF passed', 
						seg_spf_reject: 'SPF blocked',
						seg_spf_except: 'SPF in exception',
						seg_hdr_unset: 'HELO domain scanning diabled',
						seg_hdr_pass: 'HELO domain scanning passed',
						seg_hdr_reject: 'HELO domain scanning blocked', 
						seg_hdr_except: 'HELO domain scanning in exception',
						seg_sdr_unset: 'Sender domain scanning disabled',
						seg_sdr_pass: 'Sender domain scanning passed', 
						seg_sdr_reject: 'Sender domain scanning blocked', 
						seg_sdr_except: 'Sender domain scanning in exception',
						seg_rdr_unset: 'Recipient domain scanning disabled',
						seg_rdr_pass: 'Recipient domain scanning passed',
						seg_rdr_reject: 'Recipient domain scanning blocked', 
						seg_rdr_except: 'Sender domain scanning in exception',
						seg_smr_unset: 'Sender mail address scanning disabled',
						seg_smr_pass: 'Sender mail address scanning passed',
						seg_smr_reject: 'No sender',
						seg_smr_except: 'Sender mail address scanning in exception',
						seg_rmr_unset: 'Recipient mail address scanning disabled',
						seg_rmr_pass: 'Recipient mail address scanning passed',
						seg_rmr_reject: 'No recipients',
						seg_rmr_except: 'Recipient mail address scanning in exception',
						seg_relay_unset: 'Relay disabled',
						seg_relay_pass: 'Relay passed',
						seg_relay_reject: 'Relay blocked',
						seg_relay_except: 'Relay in exception',
						seg_eml_size_unset: 'Mail size limit disabled',
						seg_eml_size_pass: 'Mail size limit passed',
						seg_eml_size_reject: 'Mail size limit blocked',
						seg_eml_size_except: 'Mail size limit in exception',
						seg_max_hop_unset: 'Number of waypoint server limit disabled',
						seg_max_hop_pass: 'Number of waypoint server limit passed',
						seg_max_hop_reject: 'Number of waypoint server limit blocked',
						seg_max_hop_except: 'Number of waypoint server limit in exception',
						seg_contents_unset: 'Content filter disabled',
						seg_contents_pass: 'Content filter passed',
						seg_contents_reject: 'Content filter blocked',
						seg_contents_except: 'Content filter in exception',
						seg_pattern_unset: 'Pattern filter disabled',
						seg_pattern_pass: 'Pattern filter passed',
						seg_pattern_reject: 'Pattern filter blocked',
						seg_pattern_except: 'Pattern filter in exception',
						seg_user_reject_unset: 'Custom block diabled',
						seg_user_reject: 'Custom blocked',
						seg_user_except_unset: 'Custom in exception disabled',
						seg_user_except: 'Custom in exception',
						delivery_sent: 'Mail delivery',
						seg_spam_act_unset: 'Spam blocking disabled',
						seg_spam_act_pass: 'Spam passed', 
						seg_spam_act_reject: 'Blocked sender', 
						seg_spam_act_except: 'Spam in exception',
						seg_spam_act_update_subject: 'Change Spam mail title',
						seg_spam_act_add_hdr: 'Add Spam mail header',
						seg_virus_act_unset: 'Malware disabled',
						seg_virus_act_pass: 'Malware passed',
						seg_virus_act_reject: 'Malware blocked', 
						seg_virus_act_except: 'Malware in exception',
						seg_virus_act_delete: 'Delete malware file',
						seg_virus_act_conv_text: 'Convert malware file to text file',
						seg_virus_act_update_subject: 'Change title of malware mail',
						seg_virus_act_add_hdr: 'Add malware mail header',
						seg_cdr_act_unset: 'CDR disabled',
						seg_cdr_act_pass: 'CDR passed', 
						seg_cdr_act_reject: 'CDR blocked',
						seg_cdr_act_except: 'CDR in exception',
						seg_cdr_act_delete: 'Delete CDR file',
						seg_cdr_act_conv_text: 'Convert to text file',
						seg_cdr_act_file_isolation: 'File Isolation',
						seg_cdr_act_update_subject: 'Change CDR mail title',
						seg_cdr_act_add_hdr: 'Add CDR mail header',
						seg_cdr_unset: 'CDR disabled',
						seg_cdr_pass: 'CDR passed',
						seg_cdr_delete: 'Delete file that not required CDR',
						seg_cdr_encryption: 'Encrypted file',
						seg_over_max_retry_drop: 'Mail deleted due to sanitization failed',
						seg_over_max_retry_send_original_eml: 'Original mail delivered due to sanitization failed',
						seg_over_max_retry_send_alarm_recver: 'Sent a notification mail to sender due to sanitization failed',
						seg_over_max_retry_send_alarm_sender: 'Sent a return mail to sender due to sanitization failed',
						seg_tag_unset: 'Tag disabled',
						seg_tag_pass: 'Tag passed',
						seg_tag_reject: 'Tag blocked',
						seg_tag_except: 'Tag in exception',
						seg_tag_add: 'Tag add',
						seg_recver_count_unset: 'Disable Recipient Limit',
						seg_recver_count_pass: 'Limit number of recipients passed',
						seg_recver_count_reject: 'Block Recipient Count Limit',
						seg_recver_count_except: 'Limit Recipient Exception',
						seg_scam_unset: 'Scam disabled',
						seg_scam_pass: 'Scam passed',
						seg_scam_reject: 'Scam blocked',
						seg_scam_except: 'Scam exception',
						
						err_bad_command: 'SMTP Command Error',
						err_eml_parsing: 'EML Parsing Error',
						err_queuing: 'Queuing Error',
						err_queuing_seg: 'Mirroring Error',
						err_queuing_mirror: 'Mirroring Temporary Save Error',
						err_rep_save: 'Backup Save Error',
						err_seg_req_temp: 'Sanitization Request Temporary Error',
						err_seg_req_perm: 'Sanitization Request Error',
						err_seg_out_temp: 'CDR Request Temporary Error',
						err_seg_out_perm: 'CDR Request Error',
						err_chk_virus: 'Malware Scan Error',
						err_chk_cdr: 'CDR Process Error',
						err_seg_temp: 'SEG Process Temporary Error',
						err_seg_perm: 'SEG Process Failed',
						
						err_seg_grey: 'GREY Error',
						err_seg_rbl: 'RBL Error',
						err_seg_spf: 'SPF Error',
						err_seg_hdr: 'HELO Domain Scanning Error',
						err_seg_sdr: 'Sender Domain Scanning Error',
						err_seg_rdr: 'Recipient Domain Scanning Error',
						err_seg_smr: 'Sender Domain Scanning Error',
						err_seg_rmr: 'Recipient Domain Scanning Error',
						err_seg_relay: 'Relay Scanning Error',
						err_seg_eml_size: 'Mail Size Limit Error',
						err_seg_max_hop: 'Number of Waypoint Server Limit Error',
						err_seg_contents: 'Content Filter Error',
						err_seg_pattern: 'Pattern Filter Error',
						err_seg_user_reject: 'Custom Block Error',
						err_seg_user_except: 'Custom in Exception Error',
						err_seg_virus: 'Malware Processing Error',
						err_seg_cdr: 'CDR Processing Error',
						
						err_delivery_temp: 'Mail Delivery Temporary Error',
						err_delivery_perm: 'Mail Delivery Failed',
						
						err_none: 'Common Error'
					}
				}
			},
			"ko-KR": {
				translation: {
					login:{
						save_id: '아이디 저장',
						login: '로그인',
						register: '회원가입'
					},
					NoticeList:{
						view : '공지 상세 정보',
						view_timeCreated: '게시일',
						view_timeUpdated: '갱신일',
						view_type: '항목',
						view_division: '분류',
						view_Content: '상세내용'
					},
					malist:{
						ma_view: '상세정보',
						ma_reception_message: '접수 내역',
						ma_response_message: '조치 내역',
						ma_comment_message: '진행 내역',
						ma_view_ticketno: '접수번호',
						ma_view_createdtime: '접수일',
						ma_view_supptotrequestor: '요청자',
						ma_view_creatorname: '상담원',
						ma_view_receptiontype: '접수방법',
						ma_view_catogryko: '접수유형',
						ma_view_enddate: '완료일',
						ma_view_ownername: '담당자',
						ma_view_responsetype: '진행방법',
						ma_view_PRIORITY_KO: '접수등급',
						ma_view_STATUS_KO: '진행상태',
						ma_search_list_stat: '진행상태',
						ma_search_list_catogry: '지원유형',
						ma_search_list_supptotrequestor: '요청자',
						total : '전체',
						Problem : '장애',
						Feature_inquiry : '기능문의',
						Technical_Support : '기술지원',
						development : '추가개발',
						Periodic_Inspection : '정기점검',
						Others : '기타'
					},
	

					errNotiMsg:{
						msg_title: '처리결과',
						msg_content_0: '세션이 종료되었습니다.\n잠시후 다시 시도해 주세요.',
						msg_content_1: '요청하신 URL 정보가 유효하지 않습니다.',
						msg_content_2: '요청하신 데이터 정보가 유효하지 않습니다.',
						msg_content_3: 'ID 또는 비밀번호가 틀렸습니다.',
						msg_content_4: '허용되지 않은 IP 입니다.',
						msg_content_5: 'DB 오류입니다.<br>잠시후 다시 시도해 주시기 바랍니다.',
						msg_content_6: '로그인하지 않았습니다.',
						msg_content_7: '라이선스가 유효하지 않습니다.',
						msg_content_8: '해당 데이터가 없습니다.',
//						msg_content_9: '알수 없는 오류입니다.',
						msg_content_9: '일시적인 오류가 발생하였습니다.<br>잠시후 다시 시도해 주시기 바랍니다.',
						msg_content_10: '입력하신 정보를 다시 확인하여 주십시오.',
						msg_content_11: '메일 원본이 없습니다.',
						msg_content_12: 'IP 형식이 맞지 않습니다. 다시 확인하여 주십시오.',
						msg_content_13: '일시적인 오류가 발생하였습니다.<br>잠시후 다시 시도해 주시기 바랍니다.',
						msg_content_14: 'URL 형식이 맞지 않습니다.<br>다시 확인하여 주십시오.',
						msg_content_17: '수신자 정보가 일치하지 않습니다.',
						msg_success_title: '성공',
						msg_success_content_0: '삭제 되었습니다.',
						msg_success_content_1: '백업 되었습니다.'
					},
					leftmenu:{
						dashboard: '대시보드',
						ma_list_total: '서비스 지원 현황',
						project_list_total: '프로젝트 현황',
						notice: '공지사항',
						customer_infomation: '관리 현황 정보',
						monitoring: '상세현황',
						mail_monitoring: '공지사항',
						mail_list: '메일 리스트',
						event_monitoring: '서비스 지원 현황',
						service_monitoring: '프로젝트 현황',
						log_monitoring: '로그 모니터링',
						queue_monitoring: '큐 모니터링',
						system_monitoring: '시스템 모니터링',
						statistics: '통계',
						policy_manager: '정책관리',
						spam_policy: '스팸 정책',
						virus_policy: '바이러스 정책',
						cdr_policy: 'CDR 정책',
						url_policy: 'URL 유해성 정책',
						isolation_policy: '문서 격리화 정책',
						preferences: '사용자관리',
						domain_preference: '회사 설정',
						autoDelete_preference: '자동삭제 설정',
						smtp_preference: 'SMTP 설정',
						config_preference: 'CONFIG 설정',
						notices_preference: '알림 설정',
						admin_preference: '관리자 설정',
						user_preference: '사용자 설정',
						equipment_preference: '장비 설정',
						product_information: '제품 정보',
						mail_body_policy: '메일 본문 정책',
						attached_file_policy: '첨부 파일 정책',
						cdr_detail_policy: 'CDR 상세 정책'
					},
					header:{
						notice: '알림',
						admin: '관리자',
						connect_country: '접속 국가',
						connect_ip: '접속 IP',
						connect_time: '최종 접속 시간'
					},
					logout:{
						header: '로그아웃',
						msg: '로그아웃 하시겠습니까?',
						apply: '예',
						cancel: '아니오'
					},
					dashboard:{
						help: '  대시보드 페이지에서는 전체적인 현황을 볼 수 있습니다.',
						location: '대시보드',
						system_usage: '시스템 사용 현황',
						system_usage_cpu: 'CPU',
						system_usage_memory: 'MEMORY',
						system_usage_disk: 'STORAGE',
						system_usage_networkRx: '네트워크 수신율 (bps)',
						system_usage_networkTx: '네트워크 송신율 (bps)',
						system_usage_cpu_warning_noti: '[CPU 사용량] 경고 임계치',
						system_usage_cpu_danger_noti: '[CPU 사용량] 위험 임계치',
						system_usage_memory_warning_noti: '[메모리 사용량] 경고 임계치',
						system_usage_memory_danger_noti: '[메모리 사용량] 위험 임계치',
						system_usage_disk_warning_noti: '[디스크 사용량] 경고 임계치',
						system_usage_disk_danger_noti: '[디스크 사용량] 위험 임계치',
						system_usage_networkRx_warning_noti: '[네트워크 수신율] 경고 임계치',
						system_usage_networkRx_danger_noti: '[네트워크 수신율] 위험 임계치',
						system_usage_networkTx_warning_noti: '[네트워크 송신율] 경고 임계치',
						system_usage_networkTx_danger_noti: '[네트워크 송신율] 위험 임계치',
						system_usage_anynoti: '% 초과',
						abatement: '방역현황',
						abatement_division: '구분',
						abatement_spam: '스팸',
						abatement_virus: '바이러스',
						abatement_cdr: 'CDR',
						abatement_normal: '정상',
						abatement_today: 'Today',
						abatement_integrated: 'Total',
						amountOfSendRecv: '메일 송ㆍ수신량',
						amount_division: '구분',
						amount_send: '송신',
						amount_recv: '수신',
						amount_send_recv: '내부',
						amount_relay: '릴레이',
						sender_top5: '보낸사람 TOP 5',
						sender_no: 'No.',
						sender_title: '보낸사람',
						sender_count: '건수',
						sender_domain_top5: '보낸사람 회사 TOP5',
						sender_domain_no: 'No.',
						sender_domain_title: '회사',
						sender_domain_count: '건수',
						sender_domain_no_title: '보낸사람 회사 없음',
						sender_country_top5: '발송국가 TOP5',
						sender_country_no: 'No.',
						sender_country_title: '국가명',
						sender_country_count: '건수',
						recver_top5: '받는사람 TOP 5',
						recver_no: 'No.',
						recver_title: '받는사람',
						recver_count: '건수',
						recver_domain_top5: '받는사람 회사 TOP5',
						recver_domain_no: 'No.',
						recver_domain_title: '회사',
						recver_domain_count: '건수',
						recver_domain_no_title: '받는사람 회사 없음',
						graph_send: '송신',
						graph_recv: '수신',
						graph_rs: '내부',
						graph_relay: '릴레이',
						graph_spam: '스팸',
						graph_virus: '바이러스',
						graph_cdr: 'CDR',
						graph_normal: '정상',
						graph_integrated: '합계' 
					},
					maillist: {
						help: '  메일 모니터링 현황을 확인 할 수 있으며, 원하는 메일을 찾기 위해서는 검색을 통하여 빠르게 찾을 수 있습니다.',
						location_1depth: '모니터링',
						location_2depth: '메일 모니터링',
						total: '전체',
						count: '건',
						search_select_term: '기간지정',
						search_sender: '보낸사람',
						search_recver: '받는사람',
						search_title: '제목',
						search_file: '첨부파일',
						search_mail_process: '메일 처리',
						search_sent_type: '발송분류',
						search_sent_type_send: '송신',
						search_sent_type_recv: '수신',
						search_sent_type_rs: '내부',
						search_sent_type_relay: '릴레이',
						search_sent_type_mirror: '미러링',
						search_final_stat: '계정',
						search_sender_unknown: '보낸사람 오류',
						search_receiver_unknown: '받는사람 오류',
						search_relay_deny: '릴레이 거부',
						search_success_delivery_temp: '배달성공',
						search_err_delivery_temp: '배달실패',
						search_abatement: '방역',
						search_abatement_spam: '스팸',
						search_abatement_virus: '바이러스',
						search_abatement_cdr: 'CDR',
						search_abatement_normal: '정상',
						search_etc: '기타',
						search_etc_file: '파일 포함',
						search_etc_dsn: '알림메일',
						search_mid: '메일 아이디',
						search_country: '국가',
						search_all_country: '전체국가',
						search_select_country: '국가 선택',
						search_mail_delivery: '메일 전달',
						search_help1: '  메일 처리항목',
						search_help2: '"미 선택"',
						search_help3: '시에 전체를 대상으로 검색합니다.',
						close: '닫기',
						submit: '검색',
						btn_submit: '적용',
						list_date: '일자',
						list_sender: '보낸사람',
						list_recver: '받는사람',
						list_sent_type: '발송 분류',
						list_title: '제목',
						list_process: '처리현황',
						list_sent_type_send: '송신',
						list_sent_type_recv: '수신',
						list_sent_type_rs: '내부',
						list_sent_type_relay: '릴레이',
						list_sent_type_mirror: '미러링',
						list_sent_type_dsn: '알림메일',
						list_file: '파일',
						list_size: '크기',
						list_detail: '이력',
						list_country: '국가',
						list_process_spam: 'S',
						list_process_spam_tooltip: 'SPAM',
						list_process_virus: 'M',
						list_process_virus_tooltip: 'MALWARE',
						list_process_cdr: 'C',
						list_process_cdr_tooltip: 'CDR',
						list_process_delivery: 'D',
						list_process_delivery_tooltip: 'DELIVERY',
						list_no_title: '(제목없음)',
						list_mail_datail: '상세이력 보기',
						list_country_null: '정보없음',
						list_etc_menu_header: '헤더보기',
						list_etc_menu_resend: '재전송',
						list_etc_menu_spam: '스팸신고',
						list_etc_menu_spam2: '스팸등록',
						list_etc_menu_eml_down: '원문저장',
						list_etc_menu_exception: '예외처리',
						list_etc_menu_exception_title: '예외처리',
						list_etc_menu_exception_item: '예외처리 항목',
						list_etc_menu_spam_register_title: '스팸등록',
						list_etc_menu_spam_register_item: '스팸등록 항목',
						list_etc_menu_exception_item_ip: 'IP',
						list_etc_menu_exception_item_sender: '보낸사람',
						list_etc_menu_exception_item_recver: '받는사람',
						list_etc_menu_exception_item_domain: '회사',
						list_etc_menu_exception_item_send_domain: '보낸사람 회사',
						list_etc_menu_exception_item_recv_domain: '받는사람 회사',
						list_etc_menu_exception_item_email: '이메일',
						list_etc_menu_exception_item2_or: '포함하면',
						list_etc_menu_exception_item2_and: '일치하면',
						list_etc_menu_exception_item2_start: '시작하면',
						list_etc_menu_exception_item2_end: '끝나면',
						list_etc_menu_exception_item_help: '예외처리는 보낸사람, 받는사람, 보낸사람회사, 받는사람회사, IP로 설정할수 있으며, 설정후 동일한 조건의 경우 들어오는 메일에 대해서는 차단되지 않습니다.',
						list_etc_menu_spam_register_item_help: '스팸등록은 보낸사람, 받는사람, 보낸사람회사, 받는사람회사, IP로 설정할수 있으며, 설정후 동일한 조건의 경우 들어오는 메일에 대해서는 차단됩니다.',
						process_result_title: '처리결과',
						process_spam_result_title: '스팸 처리결과',
						process_virus_result_title: '바이러스 처리결과',
						process_cdr_result_title: 'CDR 처리결과',
						process_delivery_result_title: '배달 처리결과',
						process_result_date: '일자',
						process_result_stat: '상태',
						process_result_info: '상세정보',
						process_result_file_name: '파일명',
						process_result_virus_stat: '검사결과',
						process_result_virus_name: '바이러스명',
						process_result_cdr_stat: '검사결과',
						process_result_cdr_detail: '상세정보',
						process_result_cdr_image: '이미지',
						process_result_issue: '결과',
						process_result_block: '차단',
						process_result_pass: '통과',
						process_result_crypt: '파일 비밀번호',
						original_eml_title: '메일 헤더 보기',
						detail_history: '이력',
						detail_history_date: '일자',
						detail_history_stat: '상태',
						detail_history_info: '상세정보',
						detail_history_list_chk_spam: '스팸 검사',
						detail_history_list_chk_virus: '바이러스 검사',
						detail_history_list_chk_cdr: 'CDR 검사',
						detail_history_list_pass: '통과',
						detail_history_virus_list_pass: '정상',
						detail_history_list_block: '차단',
						detail_history_list_delete: '제거',
						detail_history_list_disinfected: '치료',
						detail_history_list_infected: '탐지',
						detail_history_list_suspected: '감염 의심',
						detail_history_list_spam: '스팸 예외',
						detail_history_list_drm: '암호화된 파일',
						detail_history_cdr_list_pass: '정상',
						detail_history_cdr_list_unset: '사용안함',
						file_detail_title: '파일 상세 정보',
						file_detail_filename: '파일명',
						file_detail_filesize: '파일 크기',
						file_detail_encode: '인코딩',
						file_detail_etc: '비고',
						mail_tracking: '메일 추적',
						mail_tracking_date: '일자',
						mail_tracking_flag: '국기',
						mail_tracking_country: '국가명',
						mail_tracking_ip: 'IP',
						mail_view: '메일 보기',
						mail_view_send: '보낸사람:',
						mail_view_recv: '받는사람:',
						mail_view_cc: '참조:',
						mail_image_view: '이미지 표시',
						mail_image_view_hidden: '이미지 숨김',
						mail_image_view_noti: '개인 정보 보호 및 외부 위협으로부터 보호하기 위해 이미지가 차단되었습니다.',
						mail_original_eml: '원본 메일',
						mail_quarantine_eml: '방역 메일',
						mail_parse_type_file_send: '파일 전송',
						mail_recver_mail_input: '수신자 메일 입력',
						
						mail_parse_type_body: '본문',
						mail_parse_type_cid: '본문 이미지',
						mail_parse_type_html: 'HTML',
						mail_parse_type_text: 'TEXT',
						mail_parse_type_attach: '첨부파일',
						mail_resend_noti: '재전송 요청을 하였습니다.<br>해당 기능은 2분동안 동작 하지 않습니다.',
						mail_resend_noti2: '메일 주소로 파일이 전달 되었습니다.',
						mail_two_min_title: '안내',
						mail_two_min_noti: '잠시 후에 다시 시도해주시기 바랍니다.',
						
						//pass
						sd_external_error_export_success: '무해화',
						sd_external_error_export_bypass_from_exceptlist: '관리자정책(파일) 무해화 예외',
						sd_external_error_export_bypass_from_user_specific_exceptlist: '관리자정책(사용자) 무해화 예외',
						sd_external_error_export_bypass_from_not_support_ext: '미지원 확장자 무해화 예외',
						sd_external_error_export_bypass_from_except_extension: '예외처리 확장자 무해화 예외',
						sd_external_error_export_bypass_from_password_protected_ziparchive: '암호설정 압축파일 무해화 예외',
						sd_external_error_export_bypass_from_password_protected: '암호설정 문서파일 무해화 예외',
						sd_external_error_export_bypass_from_pe_limit_size: '실행파일 무해화 제한용량 초과 무해화 예외',
						sd_external_error_export_bypass_from_doc_limit_size: '문서파일 무해화 제한용량 초과 무해화 예외',
						sd_external_error_export_bypass_from_not_support_executable_archive: '실행형 압축파일 무해화 예외',
						sd_external_error_export_bypass_from_break_filename_encoding_in_zip: '압축파일 내 파일명 인코딩 에러 무해화 예외',
						sd_external_error_export_bypass_filetype_policy: '무해화 예외설정 파일포맷',
						sd_external_error_export_bypass_encryption_zip: '암호설정 압축파일 무해화 예외',
						sd_external_error_export_bypass_from_attached_html_file: '첨부 된 HTML 파일 무해화 예외',
						sd_external_error_export_bypass_does_not_support_file_version: '지원하지 않는 하위버전의 파일 bypass',
						
						//reject
						sd_external_error_export_deny_from_blacklist: '관리정책(파일) 반입차단',
						sd_external_error_export_deny_from_user_specific_blacklist: '관리정책(사용자) 반입차단',
						sd_external_error_export_deny_from_not_support_ext: '미지원확장자 반입차단',
						sd_external_error_export_deny_from_password_protected_ziparchive: '암호설정 압축파일 반입차단(정책)',
						sd_external_error_export_deny_from_invalid_password_archive: '잘못 된 패스워드 입력 차단 (압축파일)',
						sd_external_error_export_deny_from_password_protected: '암호설정 문서파일 반입차단(정책)',
						sd_external_error_export_deny_from_invalid_password_doc: '잘못 된 패스워드 입력 차단 (문서파일)',
						sd_external_error_export_deny_from_pe_limit_size: '실행파일 방역 제한용량 초과 반입차단',
						sd_external_error_export_deny_from_doc_limit_size: '문서파일 방역 제한용량 초과 반입차단',
						sd_external_error_export_deny_from_not_support_executable_archive: '실행형 압축파일 차단',
						sd_external_error_export_deny_from_break_filename_encoding_in_zip: '압축파일 내 파일명 인코딩 깨짐 처리 (차단)',
						sd_external_error_export_deny_from_file_length_limit: '파일명 길이가 Windows에서 지원하는 260자 초과시 차단',
						sd_external_error_export_deny_from_n_files_over_in_zip: 'ZIP 파일 내 단일파일 허용 개수 초과',
						sd_external_error_export_deny_from_attached_html_file: '첨부 된 HTML 파일 차단',
						sd_external_error_export_suspect_apt_hwp_file: 'HWP Exploit 차단',
						sd_external_error_export_suspect_apt_office_file: 'Office Exploit 차단',
						sd_external_error_does_not_support_executable_archive: '실행형 압축파일 차단',
						sd_external_error_modified_file_extension_type_1: '확장자 불일치 차단',
						sd_external_error_modified_file_extension_type_2: '확장자 위변조 차단',
						sd_external_error_export_deny_from_pe_in_zip_mnd_only: 'ZIP 파일 내 EXE 파일 존재 시 차단',
						sd_external_error_export_deny_from_0_files_in_zip: '압축파일 내 파일 미존재 이상파일',
						sd_external_error_force_encryption_failed: 'DS 암호화 오류 차단',
						sd_external_error_does_not_support_file_extension_from_ds_localset: 'DS 암호화 미지원 확장자 차단',
						sd_external_error_bad_casting: '방역오류 - Static Cast Error',
						sd_external_error_invalid_options: '방역오류 - 환경 오류 (COM 관련)',
						sd_external_error_invalid_header_from_options: '방역오류 - 환경 오류 (API 관련)',
						sd_external_error_make_stup_failed: '방역오류 - 실행파일',
						sd_external_error_copy_file_failed: '방역오류 - 파일복사실패',
						sd_external_error_move_file_failed: '방역오류 - 파일이동실패',
						sd_external_error_create_vrf_temp_failed: '방역오류 - 임시폴더 생성실패',
						sd_external_error_string_format_failed: 'StringCchPrintf 실패',
						sd_external_error_invalid_file_from_archive: 'Zip Sanitizer 내부에서 알 수 없는 파일',
						sd_external_error_load_library_failed: '방역오류 - 환경 오류 (DLL 관련)',
						sd_external_error_file_does_not_exist: '방역오류 - 파일없음',
						sd_external_error_exploit_detected: '악성코드 의심 차단',
						sd_external_error_aspose_slides_undefined: 'Powerpoint 컨텐츠 추출 오류',
						sd_external_error_aspose_words_undefined: 'Word 컨텐츠 추출 오류',
						sd_external_error_aspose_cells_undefined: 'Excel 컨텐츠 추출 오류',
						sd_external_error_aspose_images_loading_failed: '이미지 컨텐츠 추출 오류',
						sd_external_error_aspose_pdf_undefined: 'PDF 컨턴츠 추출 오류',
						sd_external_error_aspose_eml_attachment_extract_fail: 'EML 첨부파일 추출 오류',
						sd_external_error_aspose_eml_attachment_assemble_fail: 'EML 첨부파일 묶음 오류',
						sd_external_error_cad_convert_fail: 'CAD 파일 컨텐츠 추출 불가',
						sd_external_error_html_python_routine_failed: 'Python Beatifulsopu4 실패',
						sd_external_error_ichitaro_converting_failed: 'ICHITARO 컨버팅 실패',
						sd_external_error_ichitaro_python_socket_failed: 'ICHITARO Socket 통신 실패',
						sd_external_error_text_reassemble_failed: 'Text 본문 재조립 실패 에러',
						sd_external_error_e_outofmemory: '방역오류 - 메모리 부족',
						sd_external_error_e_abort: '방역오류 - 방역중단',
						sd_external_error_e_nointerface: '방역오류 - 인터페이스 오류',
						sd_external_error_e_invalidarg: '방역오류 - 파라미터 에러',
						sd_external_error_e_unexpected: '방역오류 - 알려지지 않은 문제',
						sd_external_error_e_filesize_0: '방역오류 - 파일크기 0',
						sd_external_error_aspose_slides_check_macro: '방역오류 - 메크로체크에러 (Slides)',
						sd_external_error_aspose_cells_check_macro: '방역오류 - 매크로체크에러 (Cells)',
						sd_external_error_aspose_words_check_macro: '방역오류 - 매크로체크에러 (Words)',
						sd_external_error_does_not_support_file_version: '지원하지 않는 하위버전의 파일 차단',
						sd_external_error_zip_extract_fail_export_deny: 'ZIP 파일 컨텐츠 손상',
						sd_external_error_modified_file_extension_type_3: '파일 위변조 반입 차단',
						
					},
					eventlist:{
						help: '  시스템 운영을 하며 발생 하는 이벤트 현황을 기록하고 있으며 확인 할 수 있습니다.',
						location_1depth: '모니터링',
						location_2depth: '이벤트 모니터링',
						total: '전체',
						count: '건',
						select_option_all: '전체',
						select_option_id: '아이디',
						select_option_ip: '접속IP',
						select_option_desc: '상세내용',
						list_time: '시간',
						list_id: '아이디',
						list_ip: '접속 IP',
						list_content: '활동 내용',
						list_desc: '상세 내용',
						filter: '활동내용별 필터 : ',
						filter_option_all: '활동내용 전체',
						filter_option_error: '오류',
						filter_option_login: '로그인',
						filter_option_mailitem: '안건',
						filter_option_svc: '서비스',
						filter_option_log: '로그',
						filter_option_config: '설정',
						filter_option_add: '관리(추가)',
						filter_option_del: '관리(삭제)',
						filter_option_modify: '관리(변경)'
						
					},
					servicelist:{
						help: '  서비스 현황을 일괄적으로 확인하며, 서비스 시작/중지를 할 수 있습니다.',
						location_1depth: '모니터링',
						location_2depth: '서비스 모니터링',
						seg_smtp: 'SEG SMTP',
						seg_smtp_start: 'Start',
						seg_smtp_stop: 'Stop',
						seg_cron: 'CRON',
						seg_cron_start: 'Start',
						seg_cron_stop: 'Stop',
						seg_spam: 'SPAM',
						seg_spam_start: 'Start',
						seg_spam_stop: 'Stop',
						seg_virus: 'VIRUS',
						seg_virus_start: 'Start',
						seg_virus_stop: 'Stop',
						seg_cdr: 'CDR',
						seg_cdr_start: 'Start',
						seg_cdr_stop: 'Stop',
						service_on: '서비스 중',
						service_off: '멈춤'
					},
					logmoniter: {
						help: '  로그파일들을 관리할수있습니다.',
						location_1depth: '모니터링',
						location_2depth: '로그 모니터링',
						total: '전체',
						count: '건',
						log_type: '로그 종류',
						log_list_modify_time: '파일 수정한 시간',
						log_list_filename: '로그 파일명',
						log_list_filesize: '파일 용량',
						log_list_down: '내려받기',
						
					},
					queuelist:{
						help: '  큐잉현황을 확인 할 수 있으며, 정체시에는 관리자의 설정으로 비우기를 할 수 있습니다.',
						location_1depth: '모니터링',
						location_2depth: '큐 모니터링',
						equipment1: '장비1',
						equipment2: '장비2',
						queue_list_folder: '큐 폴더',
						queue_list_normal_count: '일반 파일 갯수',
						queue_list_queue_count: '큐 파일 갯수',
						queue_list_queue_time: '가장 오래된 큐 시간',
						queue_list_desc: '상세 내용',
						queue_list_detail_btn: '상세내용',
						queue_modal_title: 'SMTP 큐 상세내용',
						queue_modal_sub_dt_title1: 'SMTP 큐',
						queue_modal_sub_dt_title2: '상세내용',
						queue_modal_dt_list_file: '큐 파일 정보',
						queue_modal_dt_list_size: '메일 크기',
						queue_modal_dt_list_time: '파일 수정 시간',
						queue_modal_sub_nm_title1: 'SMTP 큐',
						queue_modal_sub_nm_title2: '일반 파일 정보',
						queue_modal_nm_list_file: '큐 파일 정보',
						queue_modal_nm_list_size: '메일 크기',
						queue_modal_nm_list_time: '파일 수정 시간',
						queue_modal_list_etc: '삭제 및 백업',
						queue_modal_detail_title: '큐 파일 상세정보',
						queue_modal_detail_title2: '큐 일반 파일 상세정보',
						queue_modal_detail_list_time: '수신시간',
						queue_modal_detail_list_ip: 'IP',
						queue_modal_detail_list_sender: '보낸사람',
						queue_modal_detail_list_recver: '받는사람',
						queue_modal_detail_list_result: '결과(재시도수)',
						queue_modal_detail_list_detail_info: '상세정보',
						close: '닫기',
						queue_mail: '메일전송',
						queue_seg_in: '방역요청',
						queue_seg_out: '방역완료'
					},
					systemMoniter: {
						help: '  시스템 모니터링 확인 할 수 있으며, 특정임계치 초과시 알림을 받을 수 있습니다.',
						location_1depth: '모니터링',
						location_2depth: '시스템 모니터링',
						equipment1: '장비1',
						equipment2: '장비2',
						graph: '그래프',
						graph_daily: '일간',
						graph_weekly: '주간',
						graph_monthly: '월간',
						graph_yearly: '연간',
						graph_5min_average: '(5분 단위 평균값 기준)',
						graph_30min_average: '(30분 단위 평균값 기준)',
						graph_2hour_average: '(2시간 단위 평균값 기준)',
						graph_1day_average: '(1일 단위 평균값 기준)',
						graph_network: '네트워크 그래프',
						graph_cpu: 'CPU 그래프',
						graph_disk: '디스크 그래프',
						graph_memory: '메모리 그래프',
						graph_network_name: '네트워크',
						graph_cpu_name: 'CPU',
						graph_disk_name: '디스크',
						graph_memory_name: '메모리',
						graph_labelAveIncoming: '평균 입력',
						graph_labelAveOutgoing: '평균 출력',
						graph_labelMaxIncoming: '최대 입력',
						graph_labelMaxOutgoing: '최대 출력',
						graph_labelAveUsage: '평균 사용량',
						graph_labelMaxUsage: '최대 사용량',
						graph_time_hour: '시',
						graph_time_day: '일',
						graph_time_sunday: '일',
						graph_time_monday: '월',
						graph_time_tuesday: '화',
						graph_time_wednesday: '수',
						graph_time_thursday: '목',
						graph_time_friday: '금',
						graph_time_saturday: '토',
						graph_time_jan: '1월',
						graph_time_feb: '2월',
						graph_time_mar: '3월',
						graph_time_apr: '4월',
						graph_time_may: '5월',
						graph_time_jun: '6월',
						graph_time_jul: '7월',
						graph_time_aug: '8월',
						graph_time_sep: '9월',
						graph_time_oct: '10월',
						graph_time_nov: '11월',
						graph_time_dec: '12월',
						select_button_help: '  로딩이 완료된 후 선택해주시기 바랍니다.',
						the_week: '째주',
						the_year: '년 ',
					},
					statistics: {
						help: '  전체 적인 통계치를 확인 하실 수 있습니다.',
						location_1depth: '통계',
						location_2depth: '통계현황',
						tab_all_help: '  전체 적인 통계치를 확인 하실 수 있습니다.',
						tab_all: '전체',
						tab_all_total: '전체',
						tab_all_count: '건',
						tab_all_select_all_domain: '전체 회사',
						tab_all_period_week: '7일',
						tab_all_period_month: '30일',
						tab_all_period_custom: '기간 지정',
						tab_all_graph_title: '그래프 보기',
						tab_all_list_date: '일자',
						tab_all_list_mail_status: '메일 현황',
						tab_ali_list_filter: '필터',
						tab_all_list_th_mail_status_send: '송신',
						tab_all_list_th_mail_status_recv: '수신',
						tab_all_list_th_mail_status_rs: '내부',
						tab_all_list_th_mail_status_relay: '릴레이',
						tab_all_list_th_mail_status_mirror: '미러링',
						tab_all_list_th_mail_status_total: '합계',
						tab_all_list_th_filter_spam: '스팸',
						tab_all_list_th_filter_virus: '바이러스',
						tab_all_list_th_filter_cdr: 'CDR',
						tab_all_list_th_normal_send: '송신',
						tab_all_list_th_normal_recv: '수신',
						tab_all_list_th_normal_rs: '내부',
						tab_all_list_th_normal_relay: '릴레이',
						tab_all_list_th_normal_mirror: '미러링',
						tab_all_list_th_status_sendErr: '보낸사람 오류',
						tab_all_list_th_status_recvErr: '받는사람 오류',
						tab_all_list_th_status_relayErr: '릴레이 거부',
						tab_all_list_th_status_deliveryErr: '배달 실패',
						tab_all_list_th_spam_send: '송신',
						tab_all_list_th_spam_recv: '수신',
						tab_all_list_th_virus_send: '송신',
						tab_all_list_th_virus_recv: '수신',
						tab_all_list_th_cdr_send: '송신',
						tab_all_list_th_cdr_recv: '수신',
						tab_all_sender_top5: '보낸사람 TOP5',
						tab_all_sender_no: 'No.',
						tab_all_sender_title: '보낸사람',
						tab_all_sender_count: '건수',
						tab_all_recver_top5: '받는사람 TOP5',
						tab_all_recver_no: 'No.',
						tab_all_recver_title: '받는사람',
						tab_all_recver_count: '건수',
						tab_all_sender_domain_top5: '보낸사람 회사 TOP5',
						tab_all_sender_domain_no: 'No.',
						tab_all_sender_domain_title: '회사',
						tab_all_sender_domain_count: '건수',
						tab_all_recver_domain_top5: '받는사람 회사 TOP5',
						tab_all_recver_domain_no: 'No.',
						tab_all_recver_domain_title: '회사',
						tab_all_recver_domain_count: '건수',
						tab_all_sender_country_top5: '발송국가 TOP5',
						tab_all_sender_country_no: 'No.',
						tab_all_sender_country_title: '국가명',
						tab_all_sender_country_count: '건수',
						tab_all_graph_send: '송신',
						tab_all_graph_recv: '수신',
						tab_all_graph_rs: '내부',
						tab_all_graph_relay: '릴레이',
						tab_all_graph_mirror: '미러링',
						tab_all_graph_spam: '스팸',
						tab_all_graph_virus: '바이러스',
						tab_all_graph_cdr: 'CDR',
						
						tab_spam_help: '  스팸 메일의 통계치를 확인 하실 수 있습니다.',
						tab_spam: '스팸',
						tab_spam_total: '전체',
						tab_spam_count: '건',
						tab_spam_select_all_domain: '전체 회사',
						tab_spam_period_week: '7일',
						tab_spam_period_month: '30일',
						tab_spam_period_custom: '기간 지정',
						tab_spam_graph_title: '그래프 보기',
						tab_spam_filter_all: '전체',
						tab_spam_filter_send: '송신',
						tab_spam_filter_recv: '수신',
						tab_spam_filter_rs: '내부',
						tab_spam_filter_relay: '릴레이',
						tab_spam_list_date: '일자',
						tab_spam_list_sdr: '보낸사람 회사 오류',
						tab_spam_list_rdr: '받는사람 회사 오류',
						tab_spam_list_hdr: 'HELO 회사 오류',
						tab_spam_list_spf: 'SPF',
						tab_spam_list_rbl: 'RBL',
						tab_spam_list_send_block: '보낸사람 없음',
						tab_spam_list_recv_block: '받는사람 없음',
						tab_spam_list_msg_size: '메시지크기제한',
						tab_spam_list_limit_server: '경유서버제한',
						tab_spam_list_pattern_filter: '패턴필터',
						tab_spam_list_content_filter: '컨텐츠필터',
						tab_spam_list_limit_recv: '받는사람수제한',
						tab_spam_list_exception: '예외처리',
						tab_spam_list_reject: '차단처리',
						tab_spam_country_top5: '국가별 TOP5',
						tab_spam_country_no: 'No.',
						tab_spam_country_title: '국가',
						tab_spam_country_count: '건수',
						tab_spam_type_top5: '유형 TOP5',
						tab_spam_type_no: 'No.',
						tab_spam_type_title: '유형',
						tab_spam_type_count: '건수',
						tab_spam_filter_top5: '필터 TOP5',
						tab_spam_filter_no: 'No.',
						tab_spam_filter_title: '필터명',
						tab_spam_filter_count: '건수',
						tab_spam_ip_top5: 'IP TOP5',
						tab_spam_ip_no: 'No.',
						tab_spam_ip_title: 'IP',
						tab_spam_ip_count: '건수',
						tab_spam_graph_send: '송신',
						tab_spam_graph_recv: '수신',
						tab_spam_graph_block_policy: '차단정책',
						tab_spam_graph_smtp_block: 'SMTP단계차단',
						tab_spam_graph_connect_block: '접속단계차단',
						tab_spam_graph_sdr: '보낸사람 회사 오류',
						tab_spam_graph_rdr: '받는사람 회사 오류',
						tab_spam_graph_hdr: 'HELO 회사 오류',
						tab_spam_graph_spf: 'SPF',
						tab_spam_graph_rbl: 'RBL',
						tab_spam_graph_send_block: '보낸사람 없음',
						tab_spam_graph_recv_block: '받는사람 없음',
						tab_spam_graph_msg_size: '메시지크기제한',
						tab_spam_graph_limit_server: '경유서버제한',
						tab_spam_graph_pattern_filter: '패턴필터',
						tab_spam_graph_content_filter: '컨텐츠필터',
						tab_spam_graph_limit_recv: '받는사람수제한',
						tab_spam_graph_exception: '예외처리',
						tab_spam_graph_tag: '태깅',
						
						tab_virus_help: '  바이러스 메일의 통계치를 확인 하실 수 있습니다.',
						tab_virus: '바이러스',
						tab_virus_total: '전체',
						tab_virus_count: '건',
						tab_virus_select_all_domain: '전체 회사',
						tab_virus_period_week: '7일',
						tab_virus_period_month: '30일',
						tab_virus_period_custom: '기간 지정',
						tab_virus_graph_title: '그래프 보기',
						tab_virus_list_date: '일자',
						tab_virus_list_send: '송신',
						tab_virus_list_recv: '수신',
						tab_virus_list_rs: '내부',
						tab_virus_list_relay: '릴레이',
						tab_virus_list_total: '합계',
						tab_virus_sender_top5: '보낸사람 TOP5',
						tab_virus_sender_no: 'No.',
						tab_virus_sender_title: '보낸사람',
						tab_virus_sender_count: '건수',
						tab_virus_recver_top5: '받는사람 TOP5',
						tab_virus_recver_no: 'No.',
						tab_virus_recver_title: '받는사람',
						tab_virus_recver_count: '건수',
						tab_virus_malignity_top5: '악성코드 TOP5',
						tab_virus_malignity_no: 'No.',
						tab_virus_malignity_title: '악성코드명',
						tab_virus_malignity_count: '건수',
						tab_virus_type_top5: '종류 TOP5',
						tab_virus_type_no: 'No.',
						tab_virus_type_title: '종류',
						tab_virus_type_count: '건수',
						tab_virus_graph_send: '송신',
						tab_virus_graph_recv: '수신',
						tab_virus_graph_total: '합계',
						
						tab_cdr_help: '  CDR의 통계치를 확인 하실 수 있습니다.',
						tab_cdr: 'CDR',
						tab_cdr_total: '전체',
						tab_cdr_count: '건',
						tab_cdr_select_all_domain: '전체 회사',
						tab_cdr_period_week: '7일',
						tab_cdr_period_month: '30일',
						tab_cdr_period_custom: '기간 지정',
						tab_cdr_graph_title: '그래프 보기',
						tab_cdr_list_date: '일자',
						tab_cdr_list_send: '송신',
						tab_cdr_list_recv: '수신',
						tab_cdr_list_count: '처리된 갯수',
						tab_cdr_list_domain: '회사',
						tab_cdr_list_size: '크기',
						tab_cdr_sender_top5: '보낸사람 TOP5',
						tab_cdr_sender_no: 'No.',
						tab_cdr_sender_title: '보낸사람',
						tab_cdr_sender_count: '건수',
						tab_cdr_recver_top5: '받는사람 TOP5',
						tab_cdr_recver_no: 'No.',
						tab_cdr_recver_title: '받는사람',
						tab_cdr_recver_count: '건수',
						tab_cdr_graph_send: '송신',
						tab_cdr_graph_recv: '수신',
						
						tab_normal_help: '  정상처리 된 메일의 통계치를 확인 하실 수 있습니다.',
						tab_normal: '정상',
						tab_normal_total: '전체',
						tab_normal_count: '건',
						tab_normal_select_all_domain: '전체 회사',
						tab_normal_period_week: '7일',
						tab_normal_period_month: '30일',
						tab_normal_period_custom: '기간 지정',
						tab_normal_graph_title: '그래프 보기',
						tab_normal_list_date: '일자',
						tab_normal_list_send: '송신',
						tab_normal_list_recv: '수신',
						tab_normal_list_rs: '내부',
						tab_normal_list_relay: '릴레이',
						tab_normal_list_mirror: '미러링',
						tab_normal_sender_top5: '보낸사람 TOP5',
						tab_normal_sender_no: 'No.',
						tab_normal_sender_title: '보낸사람',
						tab_normal_sender_count: '건수',
						tab_normal_recver_top5: '받는사람 TOP5',
						tab_normal_recver_no: 'No.',
						tab_normal_recver_title: '받는사람',
						tab_normal_recver_count: '건수',
						tab_normal_sender_domain_top5: '보낸사람 회사 TOP5',
						tab_normal_sender_domain_no: 'No.',
						tab_normal_sender_domain_title: '회사',
						tab_normal_sender_domain_count: '건수',
						tab_normal_recver_domain_top5: '받는사람 회사 TOP5',
						tab_normal_recver_domain_no: 'No.',
						tab_normal_recver_domain_title: '회사',
						tab_normal_recver_domain_count: '건수',
						tab_normal_sender_country_top5: '발송국가 TOP5',
						tab_normal_sender_country_no: 'No.',
						tab_normal_sender_country_title: '국가명',
						tab_normal_sender_country_count: '건수',
						tab_normal_graph_send: '송신',
						tab_normal_graph_recv: '수신',
						tab_normal_graph_rs: '내부',
						tab_normal_graph_relay: '릴레이',
						tab_normal_graph_mirror: '미러링',
						
						tab_final_help: '  메일 전송에 실패한 항목별 통계치를 확인 하실 수 있습니다.',
						tab_final: '메일전달',
						tab_final_total: '전체',
						tab_final_count: '건',
						tab_final_select_all_domain: '전체 회사',
						tab_final_period_week: '7일',
						tab_final_period_month: '30일',
						tab_final_period_custom: '기간 지정',
						tab_final_graph_title: '그래프 보기',
						tab_final_list_date: '일자',
						tab_final_list_pass: '성공',
						tab_final_list_reject: '실패',
						tab_final_graph_pass: '성공',
						tab_final_graph_reject: '실패',
						tab_final_graph_total: '합계',
						
						tab_rank_help: '  보낸사람, 받는사람, 보낸사람회사, 받는사람회사, 발송국가에 대한 TOP5 통계치를 보여줍니다.',
						tab_rank: '랭킹',
						
						tab_tagging_help: '  메일을 분류하는 태그처리에 대한 통계치를 확인 하실 수 있습니다.',
					},
					domain: {
						help: '  회사 관련 정보 및 설정을 할 수 있는 페이지 입니다.',
						location_1depth: '환경설정',
						location_2depth: '회사 설정',
						total: '전체',
						count: '건',
						search_placeholder: '회사명을 입력하세요.',
						list_domain_name: '회사명',
						list_default_domain: '대표 회사',
						list_internal_external: '내부/외부',
						list_id_case_sensitivity: '아이디 대소문자 구분',
						list_create_time: '생성 시간',
						list_edit: '수정/삭제',
						list_item_isLocal_true: '내부',
						list_item_isLocal_false: '외부',
						list_item_isCaseIgnore_true: '구분',
						list_item_isCaseIgnore_false: '구분 안함',
						list_item_edit: '수정',
						list_item_del: '삭제',
						list_item_backup: '백업',
						list_item_mirror: '미러링',
						list_item_mirror_usage: '미러링 사용여부',
						list_item_mirror_port: '포트',
						list_item_smart_host_usage: '메일서버 사용여부',
						list_item_smart_host_setting: '수신 메일서버',
						list_item_crm_setting: 'CRM의 회사명(구분자 ; )',
						list_item_smart_host: '메일서버',
						list_item_smart_host_server: '메일서버 정보',
						list_item_smart_host_port: '메일서버 포트',
						list_item_smart_host_type: '메일서버 종류',
						list_item_smart_host_ssl: '메일서버 SSL',
						list_item_smart_host_type_smtp: 'SMTP 서비스',
						list_item_smart_host_type_pop3: 'POP 서비스',
						list_item_smart_host_type_imap4: 'IMAP 서비스',
						list_item_server_help: '(IP 또는 회사)',
						btn_add: '추가',
						btn_submit: '적용',
						btn_close: '닫기',
						btn_yes: '예',
						btn_no: '아니오',
						label_switch_on: '사용',
						label_switch_off: '미사용',
						label_switch_internal: '내부',
						label_switch_external: '외부',
						modal_title: '회사 추가',
						modal_list_domain_name: '회사 명',
						modal_list_internal_external: '내/외부 회사',
						modal_list_id_case_sensitivity: '아이디 대소문자 구분',
						modal_list_mirror_setting: '메일 미러링',
						modal_list_mirror_server: '서버 정보',
						modal_list_mirror_port: '서버 포트',
						modal_list_mirror_ssl: 'SSL',
						modal_list_smarthost_server: '서버 정보',
						modal_list_smarthost_port: '서버 포트',
						modal_list_smarthost_ssl: 'SSL',
						modal_edit_title: '회사 수정',
						modal_edit_list_domain_name: '회사 명',
						modal_edit_list_default_domain: '대표 회사 설정',
						modal_edit_list_internal_external: '내/외부 회사',
						modal_edit_list_id_case_sensitivity: '아이디 대소문자 구분',
						modal_del_title: '회사 삭제',
						modal_del_msg1: '회사명:  [',
						modal_del_msg2: ']  을 삭제 하시겠습니까?',
						modal_list_smarthost_on: '지정',
						modal_list_smarthost_off: 'MX레코드',
					},
					autoDelete: {
						help: '  시스템을 효율적으로 운영하기위해 로그파일, 메일원본, 메일리스트의 주기를 설정하여 자동삭제 처리됩니다.',
						location_1depth: '환경설정',
						location_2depth: '자동삭제 설정',
						usage: '사용여부',
						label_switch_on: '사용',
						label_switch_off: '미사용',
						log_file: '로그파일',
						log_file_help1: '',
						log_file_help2: ' 일 지난 로그파일 삭제',
						save_mail: '저장된 메일(원본)',
						save_mail_help1: '',
						save_mail_help2: ' 일 지난 저장된 메일(원본) 삭제',
						mail_list: '메일 리스트',
						mail_list_help1: '',
						mail_list_help2: ' 일 지난 메일 리스트 삭제',
						common_help: '  공통 : 0 은 삭제 안함',
						btn_submit: '적용',
						loding_msg1: '진행중',
						loding_msg2: '변경된 내용을 저장중입니다.',
						result: '결과',
						result_msg: '설정값이 변경 되었습니다.',
						result_msg1: '시스템 적용을 위해서는',
						result_msg2: ' 를 재시작 하시기 바랍니다.',
						result_location: '위치: home > 모니터링 > 서비스 모니터링',
						seg_cron_serivce: 'SEG CRON 서비스',
						error: '오류',
						error_msg: '적용 실패하였습니다.'
					},
					smtp: {
						help: '  STMP 관련 설정을 할 수 있습니다.',
						location_1depth: '환경설정',
						location_2depth: 'SMTP 설정',
						log_setting: 'SMTP 로그 설정',
						log_path: '로그경로',
						log_level: '로그레벨',
						log_level_error: '오류',
						log_level_info: '정보',
						log_level_debug: '디버그',
						dns_socket: 'DNS & 소켓',
						dns_server: 'DNS 서버',
						port_number: '포트 번호',
						port: 'port',
						ipv4: 'IPv4',
						ipv4_label_switch_on: '사용',
						ipv4_label_switch_off: '미사용',
						ipv6: 'IPv6',
						ipv6_label_switch_on: '사용',
						ipv6_label_switch_off: '미사용',
						connection: '연결 Timeout',
						second: '초',
						command: '명령어 Timeout',
						receive_mail: '메일수신 Timeout',
						smtp_msg_queue: 'SMTP 메시지 큐',
						queue_empty_period: 'Queue 비우는 주기',
						queue_path: 'Queue 경로',
						queue_count: 'Queue 갯수',
						count: '개',
						return_received_mail: '수신메일 반송',
						hour_later: '시간 후',
						return_sent_mail: '송신메일 반송',
						delete_returned_mail: '반송메일 삭제',
						queue_connection: '연결 Timeout',
						queue_command: '명령어 Timeout',
						queue_receive_mail: '메일수신 Timeout',
						smtp_management: 'SMTP 운영',
						use_smtp_auth: 'SMTP 인증 사용',
						use_smtp_auth_label_switch_on: '사용',
						use_smtp_auth_label_switch_off: '미사용',
						allow_relay_local_machine: '로컬장비 릴레이 허용',
						allow_relay_local_machine_label_switch_on: '사용',
						allow_relay_local_machine_label_switch_off: '미사용',
						allow_relay_smtp_authed: 'SMTP 인증된 사용자 릴레이 허용',
						allow_relay_smtp_authed_label_switch_on: '사용',
						allow_relay_smtp_authed_label_switch_off: '미사용',
						deny_external_mail_address: '외부메일주소 릴레이 거부',
						deny_external_mail_address_label_switch_on: '사용',
						deny_external_mail_address_label_switch_off: '미사용',
						use_ssl: 'SSL 사용',
						use_ssl_label_switch_on: '사용',
						use_ssl_label_switch_off: '미사용',
						ssl_port_number: 'SSL 포트번호',
						use_tls: 'TLS 사용',
						use_tls_label_switch_on: '사용',
						use_tls_label_switch_off: '미사용',
						use_submission_port: 'Submission 포트 사용',
						use_submission_port_label_switch_on: '사용',
						use_submission_port_label_switch_off: '미사용',
						submission_port_number: 'Submission 포트 번호',
						loding_msg1: '진행중',
						loding_msg2: '변경된 내용을 저장중입니다.',
						result: '결과',
						result_msg: '설정값이 변경 되었습니다.',
						result_msg1: '시스템 적용을 위해서는',
						result_msg2: ' 를 재시작 하시기 바랍니다.',
						result_location: '위치: home > 모니터링 > 서비스 모니터링',
						seg_smtp_serivce: 'SEG SMTP 서비스',
						error: '오류',
						error_msg: '적용 실패하였습니다.',
						btn_submit: '적용'
					},
					config: {
						help: '  해당 제품의 CONFIG 파일을 접근 및 수정 할 수 있습니다.',
						location_1depth: '환경설정',
						location_2depth: 'CONFIG 설정',
						btn_submit: '적용',
						approval_help: '  승인 관련 설정을 할 수 있습니다.',
						auth_help: '  비밀번호 정책 관련 설정을 할 수 있습니다.',
						core_help: '  핵심 설정을 할 수 있습니다.',
						cron_help: '  예약 작업에 대한 설정을 할 수 있습니다.',
						dbcp_help: '  데이터 베이스 관련 설정을 할 수 있습니다.',
						seg_help: '  SEG 관련 설정을 할 수 있습니다.',
						smtp_help: '  SMTP 관련 설정을 할 수 있습니다.',
						sysmon_help: '  시스템 관련 설절을 할 수 있습니다.',
						process_result: '처리 결과',
						process_result_msg: '변경된 내용이 없습니다.',
						result: '결과',
						result_msg: '적용되었습니다.',
						seg_smtp_serivce: 'SEG SMTP',
						seg_cron_serivce: 'SEG CRON',
						serivce: '서비스',
						and: '를',
						result_msg2: '재시작 해 주시기 바랍니다.',
						result_location: '위치 : home > 모니터링 > 서비스 모니터링'
					},
					notices:{
						help: '  여러가지 항목에 대한 알림 서비스를 설정 할 수 있습니다.',
						location_1depth: '환경설정',
						location_2depth: '알림 설정',
						btn_submit: '적용',
						btn_template: '템플릿 미리보기',
						btn_add: '추가',
						btn_close: '닫기',
						btn_send: '발송',
						error: '오류',
						error_msg: '이메일 형식에 맞지 않습니다.',
						error_msg2: '중복 이메일이 존재 합니다.',
						modal_template: '템플릿 미리보기',
						okay: '확인',
						okay_msg: '적용되었습니다.',
						interval_type: '실행 주기',
						interval_now: '1회',
						interval_hourly: '매시간',
						interval_daily: '매일',
						url: '시스템 점검 URL',
						
						tab_system: '시스템 알림',
						tab_system_help: '  시스템 현황의 알림 임계치를 설정 할 수 있습니다. [임계치 설정(경고 권장값:50%, 위험 권장값:80%)]',
						tab_system_usage: '사용여부',
						tab_system_usage_label_switch_on: '사용',
						tab_system_usage_label_switch_off: '미사용',
						tab_system_refresh_time: '갱신주기',
						tab_system_refresh_time_min: '분',
						tab_system_refresh_time_hour: '시',
						tab_system_refresh_time_day: '일',
						tab_system_object: '대상',
						tab_system_threshold: '임계치 설정',
						tab_system_sent_time: '발송 시점',
						tab_system_cpu: 'CPU',
						tab_system_cpu_warning: '경고: ',
						tab_system_cpu_danger: '위험: ',
						tab_system_cpu_warning_chk: '경고',
						tab_system_cpu_danger_chk: '위험',
						tab_system_memory: 'MEMORY',
						tab_system_memory_warning: '경고: ',
						tab_system_memory_danger: '위험: ',
						tab_system_memory_warning_chk: '경고',
						tab_system_memory_danger_chk: '위험',
						tab_system_disk: 'DISK',
						tab_system_disk_warning: '경고: ',
						tab_system_disk_danger: '위험: ',
						tab_system_disk_warning_chk: '경고',
						tab_system_disk_danger_chk: '위험',
						tab_system_network: 'NETWORK',
						tab_system_network_warning: '경고: ',
						tab_system_network_danger: '위험: ',
						tab_system_network_warning_chk: '경고',
						tab_system_network_danger_chk: '위험',
						tab_system_sender_mail: '보낸사람 메일주소',
						tab_system_mail_title: '알림메일 제목',
						tab_system_mail_title_placeholder: '시스템 메일 알림',
						tab_system_safe_mail_title: '정상 알림메일 제목',
						tab_system_safe_mail_title_placeholder: '시스템 정상 메일 알림',
						tab_system_noti_email: '알림받을 Email',
						tab_system_template: '템플릿',
						
						tab_spam: '사용자별 메일 리포트',
						tab_spam_help: '  사용자별 메일 리포트의 설정 할 수 있습니다. 작일 사용자별 메일 리스트를 전송합니다.',
						tab_spam_usage: '사용자별 메일 리포트 사용 여부',
						tab_spam_usage_label_switch_on: '사용',
						tab_spam_usage_label_switch_off: '미사용',
						tab_spam_sent_time: '발송 주기',
						tab_spam_sent_time_1hour: '1시간',
						tab_spam_sent_time_2hour: '2시간',
						tab_spam_sent_time_3hour: '3시간',
						tab_spam_sent_time_4hour: '4시간',
						tab_spam_sent_time_6hour: '6시간',
						tab_spam_sent_time_8hour: '8시간',
						tab_spam_sent_time_12hour: '12시간',
						tab_spam_sent_time_24hour: '24시간',
						tab_spam_sent_time_help_msg1: '  지정된 ',
						tab_spam_sent_time_help_msg2: '시간 단위로 발송 됩니다.',
						tab_spam_mail_title: '알림메일 제목',
						tab_spam_mail_title_placeholder: '스펨메일 알림',
						tab_spam_sender_mail: '보낸사람 메일주소',
						tab_spam_sender_user_mail: '개별 메일 발송',
						tab_spam_sender_user_mail_placeholder: '개별메일 수신자 입력',
						tab_spam_sender_user_mail_once: '개별',
						tab_spam_sender_user_mail_popup_title: '메일 발송',
						tab_spam_sender_user_mail_popup_help: '전체 메일로 발송됩니다. 발송하시겠습니까?',
						tab_spam_template: '템플릿',
						tab_spam_send_user_noti: '입력하신 Email에 발송되었습니다.',
						tab_spam_send_user_noti_err: '실패메일',
						
						tab_virus: '바이러스 알림',
						tab_virus_help: '  바이러스 알림의 임계치 및 발송 시간을 설정 할 수 있습니다. 발송시간 미 설정시 설정탭 값 기준으로 전송됩니다.',
						tab_virus_usage: '바이러스 알림 사용 여부',
						tab_virus_usage_label_switch_on: '사용',
						tab_virus_usage_label_switch_off: '미사용',
						tab_virus_threshold: '임계치 설정',
						tab_virus_threshold_help: ' (건) 이상 알림.',
						tab_virus_sent_type: '발송 선택',
						tab_virus_sent_once: '발생시점 (1회)',
						tab_virus_sent_roop: '반복발송 (시간별)',
						tab_virus_content_help: '  발송시점 1회만 발송됩니다.',
						tab_virus_sender_mail: '보낸사람 메일주소',
						tab_virus_mail_title: '알림메일 제목',
						tab_virus_mail_title_placeholder: '바이러스 알림 메일',
						tab_virus_noti_email: '알림받을 Email',
						tab_virus_template: '템플릿',
						
						tab_mail: '메일 알림',
						tab_mail_help: '  메일 알림의 임계치 및 발송 시간을 설정 할 수 있습니다. 발송시간 미 설정시 설정탭 값 기준으로 전송됩니다.',
						tab_mail_send_usage: '메일 송신량 알림 사용 여부',
						tab_mail_send_usage_label_switch_on: '사용',
						tab_mail_send_usage_label_switch_off: '미사용',
						tab_mail_send_threshold: '송신량 임계치 설정',
						tab_mail_send_threshold_help: ' (건) 이상 알림.',
						tab_mail_recv_usage: '메일 수신량 알림 사용 여부',
						tab_mail_recv_usage_label_switch_on: '사용',
						tab_mail_recv_usage_label_switch_off: '미사용',
						tab_mail_recv_threshold: '수신량 임계치 설정',
						tab_mail_recv_threshold_help: ' (건) 이상 알림.',
						tab_mail_rs_usage: '내부 송수신량 알림 사용 여부',
						tab_mail_rs_usage_label_switch_on: '사용',
						tab_mail_rs_usage_label_switch_off: '미사용',
						tab_mail_rs_threshold: '내부 송수신량 임계치 설정',
						tab_mail_rs_threshold_help: ' (건) 이상 알림.',
						tab_mail_relay_usage: '릴레이량 알림 사용 여부',
						tab_mail_relay_usage_label_switch_on: '사용',
						tab_mail_relay_usage_label_switch_off: '미사용',
						tab_mail_relay_threshold: '릴레이 임계치 설정',
						tab_mail_relay_threshold_help: ' (건) 이상 알림.',
						tab_mail_content_help: '  발송시점 1회만 발송됩니다.',
						tab_mail_title: '알림메일 제목',
						tab_mail_title_placeholder: '메일 알림',
						tab_mail_sender_mail: '보낸사람 메일주소',
						tab_mail_mail_title: '알림메일 제목',
						tab_mail_noti_email: '알림받을 Email',
						tab_mail_template: '템플릿',
						
						tab_queue: '큐 알림',
						tab_queue_help: '  큐 알림의 임계치 및 발송 시간을 설정 할 수 있습니다. 발송시간 미 설정시 설정탭 값 기준으로 전송됩니다.',
						tab_queue_usage: '큐 사용량 알림 사용 여부',
						tab_queue_usage_label_switch_on: '사용',
						tab_queue_usage_label_switch_off: '미사용',
						tab_queue_threshold: '임계치 설정',
						tab_queue_threshold_help: ' (건) 이상 알림.',
						tab_queue_sent_type: '발송 선택',
						tab_queue_sent_once: '발생시점 (1회)',
						tab_queue_sent_roop: '반복발송 (시간별)',
						tab_queue_content_help: '  발송시점 1회만 발송됩니다.',
						tab_queue_sender_mail: '보낸사람 메일주소',
						tab_queue_mail_title: '알림메일 제목',
						tab_queue_mail_title_placeholder: '큐 알림 메일',
						tab_queue_safe_mail_title: '정상 알림메일 제목',
						tab_queue_safe_mail_title_placeholder: '큐 정상 알림 메일',
						tab_queue_noti_email: '알림받을 Email',
						tab_queue_template: '템플릿',
						
						tab_report: '보고서',
						tab_report_help: '  메일 통계를 기준으로 작성된 보고서 알림을 설정 할 수 있습니다.',
						tab_report_usage: '보고서 사용 여부',
						tab_report_usage_label_switch_on: '사용',
						tab_report_usage_label_switch_off: '미사용',
						tab_report_period: '대상 기간',
						tab_report_period_day: '일일 보고',
						tab_report_period_week: '주간 보고',
						tab_report_period_month: '월간 보고',
						tab_report_period_select: '기간선택',
						tab_report_period_dateFrom: '시작일',
						tab_report_period_dateTo: '종료일',
						tab_report_start_noti: '발송일',
						tab_report_start_noti_today: '오늘',
						tab_report_start_noti_custom: '특정 기간',
						tab_report_sent_object: '발송 대상',
						tab_report_sent_object_all: '전체',
						tab_report_sent_object_normal: '정상',
						tab_report_sent_object_spam: '스팸',
						tab_report_sent_object_virus: '바이러스',
						tab_report_sent_object_send: '송신',
						tab_report_sent_object_recv: '수신',
						tab_report_sent_object_cdr: 'CDR',
						tab_report_content_help: '  발송시점 기준으로 30일 경우 이전 30일에 해당하는 보고서가 발송됩니다.',
						tab_report_sender_mail: '보낸사람 메일주소',
						tab_report_mail_title: '알림메일 제목',
						tab_report_mail_title_placeholder: '보고서 알림 메일',
						tab_report_noti_email: '알림받을 Email',
						tab_report_template: '템플릿',
						
						tab_service: '서비스 알림',
						tab_service_usage: '서비스 알림 사용여부',
						tab_service_content_help: '  서비스 알림을 설정 할 수 있습니다.',
						tab_service_sender_mail: '보낸사람 메일주소',
						tab_service_mail_title: '알림메일 제목',
						tab_service_mail_title_placeholder: '서비스 알림 메일',
						tab_service_noti_email: '알림받을 Email',
						tab_service_template: '템플릿',
						
						tab_vaccine: '백신 업데이트',
						tab_vaccine_help: '  백신 패턴이 업데이트 되면 알림메일을 발송합니다.',
						
						tab_error: '오류 알림',
						tab_error_help: '  기능오류 발생시 알림메일을 발송합니다.'
					},
					admin: {
						help: '  접근 제어, 패스워드 관련 설정을 할 수 있습니다.',
						location_1depth: '환경설정',
						location_2depth: '관리자 설정',
						btn_add: '추가',
						btn_submit: '적용',
						btn_update: '수정',
						btn_modify: '변경',
						btn_delete: '삭제',
						btn_modify_title: '변경', 
						btn_delete_title: '삭제', 
						btn_close: '닫기',
						
						tab_access_setting: '관리자 접근 제한',
						tab_access_setting_help: '  관리자 접근 제한 설정을 할 수 있습니다.',
						tab_access_setting_total: '전체',
						tab_access_setting_count: '건',
						tab_access_setting_usage: '관리자 접근제한 사용여부',
						tab_access_setting_usage_label_switch_on: '사용',
						tab_access_setting_usage_label_switch_off: '미사용',
						tab_access_setting_header_title: '정책',
						tab_access_setting_header_allow: '허용',
						tab_access_setting_header_deny: '차단',
						tab_access_setting_header_add: '정책 추가하기',
						tab_access_setting_list_ip: 'IP',
						tab_access_setting_list_ip_type: 'IP 형식',
						tab_access_setting_list_desc: '설명',
						tab_access_setting_list_time: '시간',
						tab_access_setting_list_update: '수정',
						tab_access_setting_add_modal_title: '관리자 접근 설정 추가',
						tab_access_setting_add_modal_ip: 'IP',
						tab_access_setting_add_modal_ip_title: 'IP', 
						tab_access_setting_add_modal_policy: '정책',
						tab_access_setting_add_modal_allow: '허용',
						tab_access_setting_add_modal_deny: '차단',
						tab_access_setting_add_modal_ip_type: 'IP 형식',
						tab_access_setting_add_modal_desc: '설명',
						tab_access_setting_add_modal_desc_title: '설명', 
						tab_access_setting_update_title: '관리자 접근 설정 수정',
						tab_access_setting_update_modal_ip: 'IP',
						tab_access_setting_update_modal_policy: '정책',
						tab_access_setting_update_modal_allow: '허용',
						tab_access_setting_update_modal_deny: '차단',
						tab_access_setting_update_modal_ip_type: 'IP 형식',
						tab_access_setting_update_modal_desc: '설명',
						tab_access_type_ip: 'IP',
						tab_access_type_netmask: '넷마스크',
						tab_access_type_wildcard: '와일드카드',
						tab_access_setting_allow_help: '  허용 리스트에 값이 추가되지 않으면 모두 차단됩니다.',
						tab_access_setting_deny_help: '  차단 리스트에 값이 추가되지 않으면 모두 허용됩니다.',
						
						tab_language_setting: '사용언어 설정',
						tab_language_setting_help: '  사용할 언어를 설정 할 수 있습니다.',
						tab_language_setting_title: '언어',
						tab_language_setting_ko: '한국어',
						tab_language_setting_us: '영어',
						tab_language_setting_jp: '일본어',
						
						tab_admin_addDel: '사용자 추가/삭제',
						tab_admin_addDel_help: '  관리자 계정을 추가 할 수 있습니다.',
						tab_admin_addDel_total: '전체',
						tab_admin_addDel_count: '건',
						tab_admin_addDel_search_all: '전체',
						tab_admin_addDel_search_id: '관리자 ID',
						tab_admin_addDel_search_domain: '회사명',
						tab_admin_addDel_list_domain_name: '회사명',
						tab_admin_addDel_list_admin: '관리자',
						tab_admin_addDel_list_admin_id: 'ID',
						tab_admin_addDel_list_admin_name: '이름',
						tab_admin_addDel_list_lang: '기본 언어',
						tab_admin_addDel_list_time: '생성일자',
						tab_admin_addDel_list_etc: '수정/삭제',
						tab_admin_addDel_update_modal_title: '관리자 변경',
						tab_admin_addDel_update_modal_old_pwd: '현재 비밀번호',
						tab_admin_addDel_update_modal_new_pwd: '비밀번호',
						tab_admin_addDel_update_modal_new_pwd_confirm: '비밀번호 확인',
						tab_admin_addDel_add_modal_title: '관리자 계정 추가',
						tab_admin_addDel_add_modal_domain_name: '회사 명',
						tab_admin_addDel_add_modal_id: '관리자 ID',
						tab_admin_addDel_add_modal_name: '관리자명',
						tab_admin_addDel_add_modal_new_pwd: '비밀번호',
						tab_admin_addDel_add_modal_new_pwd_confirm: '비밀번호 확인',
						tab_admin_addDel_del_modal_title: '관리자 계정 삭제',
						tab_admin_addDel_del_modal_help: '해당 계정을 삭제 하시겠습니까?',
						tab_admin_addDel_id_chk_help: '해당 ID는 이미 사용중입니다.',
						tab_admin_addDel_list_right: '권한',
						tab_admin_addDel_domain_admin: '회사 관리자',
						tab_admin_addDel_system_admin: '전체 관리자',
						tab_admin_addDel_domain_list_none: '회사 없음',
						tab_admin_addDel_modify_passwd: '비밀번호 변경',
						tab_admin_addDel_modify_right: '권한 변경',
						
						tab_password_manager: '비밀번호 관리',
						tab_password_manager_help: '  비밀번호 관리의 해당되게 비밀번호를 설정 할 수 있습니다.',
						tab_password_manager_length_min: '비밀번호 최소 길이',
						tab_password_manager_special_ch: '비밀번호 포함할 특수문자수',
						tab_password_manager_length_num: '비밀번호 포함할 숫자 수',
						tab_password_manager_content_help: '  공통 : 0 은 무제한',
						tab_password_manager_result: '성공',
						tab_password_manager_result_help: '적용되었습니다.',
						
						tab_password_setting: '비밀번호 변경',
						tab_password_setting_help: '  관리자 계정의 비밀번호를 변경 할 수 있습니다.',
						tab_password_setting_old_pwd: '현재 비밀번호',
						tab_password_setting_old_pwd_title: '현재 비밀번호', 
						tab_password_setting_new_pwd: '새로운 비밀번호',
						tab_password_setting_new_pwd_title: '새로운 비밀번호', 
						tab_password_setting_new_pwd_confirm: '새로운 비밀번호 확인',
						tab_password_setting_new_pwd_confirm_title: '새로운 비밀번호 확인', 
						tab_password_setting_length_msg1: '비밀번호의 길의는 최소 ',
						tab_password_setting_length_msg2: '자리 입니다.',
						tab_password_setting_special_help: '특수문자가 포함되어 있지 않습니다.',
						tab_password_setting_number_help: '숫자가 포함되어 있지 않습니다.',
						tab_password_setting_pwd_chk_help: '비밀번호가 일치합니다.',
						tab_password_setting_pwd_unchk_help: '비밀번호가 일치 하지 않습니다.',
						tab_password_setting_pwd_complate_help: '비밀번호 변경에 성공하였습니다.'
					},
					user: {
						help: '  조직도 및 전체 사용자에 대한 정보를 수정 할 수 있습니다.',
						location_1depth: '환경설정',
						location_2depth: '사용자 설정',
						total: '전체',
						count: '건',
						btn_add: '추가',
						btn_submit: '적용',
						btn_update: '수정',
						btn_modify: '변경',
						btn_delete: '삭제',
						btn_modify_title: '변경', 
						btn_delete_title: '삭제', 
						btn_close: '닫기',
						btn_add_group: '그룹추가하기',
						btn_add_user: '사용자 등록',
						add_user_modify: '사용자 정보 등록',
						edit_user_modify: '사용자 정보 수정',
						list_name: '이름',
						list_group_name: '그룹명',
						list_id: '아이디',
						list_register_date: '등록일자',
						list_modify: '수정',
						organization: '조직도',
						modal_add_user_inidividual: '개별 등록',
						modal_add_user_bundle: '일괄 등록',
						modal_add_user_sample_down: '양식 다운로드',
						modal_name: '이름',
						modal_group_name: '그룹명',
						modal_id: '아이디',
						modal_password: '패스워드',
						modal_password2: '패스워드 확인',
						modal_register_date: '등록일자',
						modal_last_modify_date: '마지막 변경일자',
						modal_group_manager: '그룹 관리',
						modal_modify_group: '그룹명 수정하기',
						modal_del_title: '사용자 삭제',
						modal_del_body: '정말로 삭제 하시겠습니까?',
						default_group_name: '미분류'
						
					},
					equipment: {
						help: '  장비 운용 정보를 확인 할 수 있습니다.',
						location_1depth: '환경설정',
						location_2depth: '장비 설정',
						total: '전체',
						count: '건',
						btn_add: '추가',
						btn_submit: '적용',
						btn_close: '닫기',
						edit_title: '수정', 
						delete_title: '삭제', 
						
						search_placeholder: '장비명을 입력하세요.',
						list_serial: '장비 고유번호',
						list_default: '마스터장비 여부',
						list_token: '장비연결 키값',
						list_mngr_url: 'mngr url',
						list_seg_url: 'seg url',
						list_name: '호스트명',
						list_ip: '대상장비 IP',
						list_port: 'Port',
						list_edit: '수정/삭제',
						
						add_modal_title: '장비 추가',
						add_modal_name: '호스트명',
						add_modal_ip: 'IP',
						add_modal_port: 'Port',
						add_modal_master: '마스터',
						add_modal_sub: '서브',
						
						update_modal_title: '장비 수정',
						
						delete_modal_title: '장비 삭제',
						delete_modal_msg: '해당 장비를 삭제 하시겠습니까?',
						overlap_msg: '해당 장비의 고유번호는 이미 등록되어 있습니다. 다시 시도해 주시기 바랍니다.',
						add_update_modal_help: '  장비명은 중복 될 수 없습니다.'
					},
					license: {
						help: '  제품정보 및 라이선스 정보를 제공합니다. MAC이나 IP정보 변경시 서비스에 영향을 줄 수 있습니다.',
						location_1depth: '환경설정',
						location_2depth: '라이선스 설정',
						btn_submit: '적용',
						
						list_company_name: '고객사',
						list_version: '제품 버전',
						list_serial: '라이선스 일련 번호',
						list_validDate: '유지보수 기간',
						list_maxValidDate: '기간 만료', 
						list_mac: 'MAC',
						list_ip: 'IP',
						list_maxUser: '사용자 수',
						list_limit_user: '무제한', 
						list_openSources: '오픈소스',
						list_copyright_info: '저작권 정보',
						list_license_update: '라이선스 업데이트',
						list_period: '제품 사용기한',
						list_default_lang: '제품 기본언어',
						
						processing: '진행중', 
						select_file: '파일 선택',
						upload_file: '파일을 업로드중입니다.', 
						upload_file_select: '업로드 할 파일을 선택하여 주십시오.', 
						error: '오류', 
						result: '결과', 
						result_msg1: '업로드 되었습니다.', 
						result_msg2: '업로드 실패하였습니다.'
					},
					spamPolicy: {
						help: '  스팸정책을 설정 할 수 있습니다.',
						location_1depth: '정책관리',
						location_2depth: '스팸정책',
						btn_add: '추가',
						btn_del: '삭제',
						btn_close: '닫기',
						btn_submit: '적용',
						
						etc_string: '외 ',
						tab_subject_list: '대상자 목록',
						
						tab_common: '공통',
						tab_grey_listing: '접속제한',
						tab_rbl: 'RBL',
						tab_spf: 'SPF',
						tab_scam: 'Scam',
						tab_helo: 'HELO 회사',
						tab_sender: '보낸사람',
						tab_recver: '받는사람',
						tab_relay: '릴레이',
						tab_contents: '메일내용',
						tab_common_help: '  스팸차단 공통정보를 수정 할 수 있습니다.',
						tab_grey_listing_help: '  SMTP 접속에 대한 통제를 수행합니다.',
						tab_rbl_help: '  송신 IP에 대한 RBL(Realtime Black List)을 조회 합니다.',
						tab_spf_help: '  송신 IP에 대한 유효성 확인을 합니다.',
						tab_scam_help: '  송신자 메일 주소에 대한 유효성 검사를 합니다.',
						tab_helo_help: '  SMTP HELO 정보에 대한 유효성 검사를 합니다.',
						tab_sender_help: '  보낸사람 회사, 메일주소에 대한 유효성 검사를 합니다.',
						tab_recver_help: '  받는사람 회사, 메일주소에 대한 유효성 검사를 합니다.',
						tab_relay_help: '  메일서버가 도용되는것에 대한 검사를 합니다.',
						tab_contents_help: '  메일내용에 대한 검사를 합니다.',
						
						tab_exception: '예외',
						tab_exception_help: '  메일에 대한 예외처리를 설정 할 수 있습니다.',
						tab_exception_list_date: '등록일',
						tab_exception_list_all: '전체',
						tab_exception_list_division: '정책',
						tab_exception_list_rule_name: '룰명',
						tab_exception_list_filter: '필터',
						tab_exception_list_process: '처리방법',
						tab_exception_list_register: '등록자',
						tab_exception_list_range: '대상자 범위',
						tab_exception_list_target_type: '룰 적용 대상',
						tab_exception_list_etc: '수정/삭제',
						tab_exception_add_modal_title: '예외 룰 추가',
						tab_exception_add_modal_rule_name: '룰 명',
						tab_exception_add_modal_bound: '대상 범위',
						tab_exception_add_modal_filter: '정책',
						tab_exception_add_modal_filter_ip: 'IP',
						tab_exception_add_modal_filter_sender: '보낸사람',
						tab_exception_add_modal_filter_recver: '받는사람',
						tab_exception_add_modal_filter_domain: '회사',
						tab_exception_add_modal_filter_email: '이메일',
						tab_exception_add_modal_filter2_or: '포함하면',
						tab_exception_add_modal_filter2_and: '일치하면',
						tab_exception_add_modal_filter2_start: '시작하면',
						tab_exception_add_modal_filter2_end: '끝나면',
						tab_exception_add_modal_ingore: '대소문자 구분',
						tab_exception_add_modal_ingore_true: '대소문자 구분',
						tab_exception_add_modal_ingore_false: '대소문자 구분 안함',
						tab_exception_add_modal_process: '처리방법',
						tab_exception_add_modal_process_label_switch_on: '허용',
						tab_exception_add_modal_process_label_switch_off: '차단',
						tab_exception_add_modal_register: '등록자',
						tab_exception_add_modal_range: '대상자 범위',
						tab_exception_add_modal_add_range: '대상 추가',
						tab_exception_add_modal_range_label_switch_on: '전체',
						tab_exception_add_modal_range_label_switch_off: '사용자',
						tab_exception_update_modal_title: '예외처리 룰 수정',
						tab_exception_update_modal_rule_name: '룰 명',
						tab_exception_update_modal_filter: '필터',
						tab_exception_update_modal_filter_ip: 'IP',
						tab_exception_update_modal_filter_domain: '회사',
						tab_exception_update_modal_filter_email: '이메일',
						tab_exception_update_modal_process: '처리방법',
						tab_exception_update_modal_process_label_switch_on: '허용',
						tab_exception_update_modal_process_label_switch_off: '차단',
						tab_exception_update_modal_register: '등록자',
						tab_exception_update_modal_range: '대상자 범위',
						tab_exception_update_modal_range_label_switch_on: '전체',
						tab_exception_update_modal_range_label_switch_off: '개인',
						tab_exception_user_modal_title: '사용자 선택',
						
						tab_block: '차단',
						tab_block_help: '  메일에 대한 차단 설정을 할 수 있습니다.',
						tab_block_add_modal_title: '차단 룰 추가',
						tab_block_update_modal_title: '차단 룰 수정',
						
						tab_smtp: 'SMTP단계 차단',
						tab_smtp_help: '  스팸메일에 대한 DNS(Domain Name System), SPF(Sender Policy Framework), RBL(Real-time Blocking List) 등 SMTP 단계 차단을 설정 할 수 있습니다.',
						tab_smtp_default_setting: '기본설정',
						tab_smtp_sender_domain: '보낸사람 회사 체크',
						tab_smtp_sender_domain_label_switch_on: '사용',
						tab_smtp_sender_domain_label_switch_off: '미사용',
						tab_smtp_recver_domain: '받는사람 회사 체크',
						tab_smtp_recver_domain_label_switch_on: '사용',
						tab_smtp_recver_domain_label_switch_off: '미사용',
						tab_smtp_helo_domain: 'HELO 회사 체크',
						tab_smtp_helo_domain_label_switch_on: '사용',
						tab_smtp_helo_domain_label_switch_off: '미사용',
						tab_smtp_domain: '회사 유/무 체크',
						tab_smtp_domain_label_switch_on: '사용',
						tab_smtp_domain_label_switch_off: '미사용',
						tab_smtp_spf: 'SPF 검사',
						tab_smtp_spf_label_switch_on: '사용',
						tab_smtp_spf_label_switch_off: '미사용',
						tab_smtp_spf_not_set_reject: 'SPF 룰을 등록하지 않은 회사 차단',
						tab_smtp_rbl: 'RBL',
						tab_smtp_rbl_label_switch_on: '사용',
						tab_smtp_rbl_label_switch_off: '미사용',
						tab_smtp_rbl_list_date: '일자',
						tab_smtp_rbl_list_site: 'RBL 사이트',
						tab_smtp_rbl_list_register: '등록자',
						tab_smtp_rbl_list_update_del: '수정/삭제',
						tab_smtp_rbl_add_modal_title: 'RBL 사이트 등록',
						tab_smtp_rbl_update_modal_title: 'RBL 사이트 수정',
						tab_smtp_sender: '보낸사람 차단',
						tab_smtp_sender_setting: '보낸사람 차단',
						tab_smtp_sender_label_switch_on: '사용',
						tab_smtp_sender_label_switch_off: '미사용',
						tab_smtp_sender_list_date: '일자',
						tab_smtp_sender_list_sender: '보낸사람',
						tab_smtp_sender_list_register: '등록자',
						tab_smtp_sender_list_update_del: '수정/삭제',
						tab_smtp_sender_list_email: '이메일',
						tab_smtp_recver: '받는사람 차단',
						tab_smtp_recver_setting: '받는사람 차단',
						tab_smtp_recver_label_switch_on: '사용',
						tab_smtp_recver_label_switch_off: '미사용',
						tab_smtp_recver_list_date: '일자',
						tab_smtp_recver_list_recver: '받는사람',
						tab_smtp_recver_list_register: '등록자',
						tab_smtp_recver_list_update_del: '수정/삭제',
						tab_smtp_recver_list_email: '이메일',
						tab_smtp_limit_recv: '받는사람 수 제한',
						tab_smtp_limit_recv_help: '명',
						tab_smtp_msg_size: '메시지 크기',
						tab_smtp_msg_size_help: 'MB',
						tab_smtp_limit_waypoint_server: '경유서버 수 제한',
						tab_smtp_limit_waypoint_server_help: '개',
						tab_smtp_account_check: '내부사용자 계정체크',
						tab_smtp_relay_inspection: '릴레이 검사',
						tab_smtp_relay_inspection_item1: '로컬 IP 허용',
						tab_smtp_relay_inspection_item2: 'SMTP 인증된 사용자 허용',
						tab_smtp_relay_inspection_item3: '내부송신자 회사만 허용',
						tab_smtp_relay_inspection_item4: '릴레이 허용 IP',
						
						tab_pattern: '패턴필터',
						tab_pattern_help: '  패턴을 사용/미사용 설정 할 수 있습니다.',
						tab_pattern_usage: '사용여부',
						tab_pattern_usage_label_switch_on: '사용',
						tab_pattern_usage_label_switch_off: '미사용',
						tab_pattern_version: '버전',
						tab_pattern_update_time: '업데이트 시간',
						
						tab_content: '컨텐츠필터',
						tab_content_help: '  내용(Contents)에 특정 단어나 문자열을 포함하고 있는 메일을 차단하기 위한 필터를 설정 할 수 있습니다.',
						tab_content_usage: '컨텐츠 필터',
						tab_content_usage_label_switch_on: '사용',
						tab_content_usage_label_switch_off: '미사용',
						tab_content_etc: '필터 추가/삭제',
						tab_content_search_all: '전체',
						tab_content_search_name: '필터명',
						tab_content_search_info: '필터정보',
						tab_content_search_register: '등록자',
						tab_content_search_time: '등록일',
						tab_content_search_object: '적용대상',
						tab_content_search_rule: '적용룰',
						tab_content_search_usage: '사용여부',
						tab_content_list_name: '필터명',
						tab_content_list_info: '필터 정보',
						tab_content_list_mail_type: '메일 분류',
						tab_content_list_register: '등록자',
						tab_content_list_time: '등록일',
						tab_content_list_object: '적용대상',
						tab_content_list_rule: '적용룰',
						tab_content_list_usage: '수정/삭제',
						tab_content_add_modal_title: '컨텐츠 필터 추가',
						tab_content_add_modal_name: '필터명',
						tab_content_add_modal_if1: '필터 조건',
						tab_content_add_modal_if1_subject: '제목',
						tab_content_add_modal_if1_url: '본문 내의 URL',
						tab_content_add_modal_if1_sender_env: '보낸사람(Header) 회사',
						tab_content_add_modal_if1_recver_env: '받는사람(Header) 회사',
						tab_content_add_modal_if1_sender_head: '보낸사람(Header)',
						tab_content_add_modal_if1_recver_head: '받는사람(Header)',
						tab_content_add_modal_if1_cc: '동보 받는사람(CC-Header)',
						tab_content_add_modal_if1_total_header: '헤더 전체',
						tab_content_add_modal_if1_header: '헤더값',
						tab_content_add_modal_if1_content_type: 'Content-Type',
						tab_content_add_modal_if1_content: '본문',
						tab_content_add_modal_if1_mail_size: '메일 크기',
						tab_content_add_modal_if1_ip: 'IP',
						tab_content_add_modal_if1_file_name: '첨부 파일명',
						tab_content_add_modal_if1_file_content: '첨부 파일 본문',
						tab_content_add_modal_if1_smtp_id: 'SMTP 인증 아이디',
						tab_content_add_modal_if1_country: '발신 국가',
						tab_content_add_modal_if1_extension: '첨부파일확장자명',
						tab_content_add_modal_if2_include: '포함하면',
						tab_content_add_modal_if2_not_include: '포함하지 않으면',
						tab_content_add_modal_if2_same: '일치하면',
						tab_content_add_modal_if2_not_same: '일치하지 않으면',
						tab_content_add_modal_if2_start: '시작하면',
						tab_content_add_modal_if2_not_start: '시작하지 않으면',
						tab_content_add_modal_if2_end: '끝나면',
						tab_content_add_modal_if2_not_end: '끝나지 않으면',
						tab_content_add_modal_if2_fit: '맞으면(정규식)',
						tab_content_add_modal_if2_not_fit: '맞지 않으면(정규식)',
						tab_content_add_modal_if2_fit_isCase: '맞으면(정규식 대소문자)',
						tab_content_add_modal_if2_not_fit_isCase: '맞지 않으면(정규식 대소문자)',
						tab_content_add_modal_if2_not_existence: '존재하지 않으면',
						tab_content_add_modal_if2_english: '영문이면',
						tab_content_add_modal_calculate: '연산 종류',
						tab_content_add_modal_calculate_once: '하나의 조건이라도 만족하면',
						tab_content_add_modal_calculate_all: '모든 조건을 만족하면',
						tab_content_add_modal_mail_class: '메일 분류',
						tab_content_add_modal_mail_class_admin: '관리자 정의 메일로 처리',
						tab_content_add_modal_mail_class_spam: '스팸 메일로 처리',
						tab_content_add_modal_mail_class_spammy: '스팸성 메일로 처리',
						tab_content_add_modal_register: '등록자',
						tab_content_add_modal_date: '등록일',
						tab_content_add_modal_object: '적용대상',
						tab_content_add_modal_object_label_switch_on: '전체',
						tab_content_add_modal_object_label_switch_off: '개인',
						tab_content_add_modal_rule: '적용룰',
						tab_content_add_modal_rule_label_switch_on: '허용',
						tab_content_add_modal_rule_label_switch_off: '차단',
						tab_content_add_modal_usage: '사용여부',
						tab_content_add_modal_usage_label_switch_on: '사용',
						tab_content_add_modal_usage_label_switch_off: '미사용',
						tab_content_update_modal_title: '컨텐츠 필터 수정',
						
						tab_process_method: '기본 처리방법',
						tab_process_method2: '처리방법',
						tab_process_method_help: '  공통적인 처리방법에 대해서 정의 합니다.',
						tab_process_method_select_option_common: '기본설정값 사용',
						tab_process_method_select_option_default: '수신거부',
						tab_process_method_select_option_tag: '제목 변경',
						tab_process_method_select_option_add_header: '헤더값 추가',
						tab_process_method_select_option_subject: '알림메일 전송',
						tab_process_method_modify_return: '리턴값 변경',
						tab_process_method_return_policy_name: '정책',
						tab_process_method_return_default_msg: '응답 메시지',
						tab_process_method_add_header_name: '헤더명 : ',
						tab_process_method_add_header_value: '헤더값 : ',
						
						tab_tag_title: '태깅',
						tab_tag_help: '  메일을 분류 할 수 있는 값을 헤더에 추가 합니다.',
						tab_tag_use: '태깅처리',
						tab_tag_sort: '구분',
						tab_tag_type: '타입',
						tab_tag_type_ip: 'IP',
						tab_tag_type_domain: '회사',
						tab_tag_type_email: '이메일',
						tab_tag_spamTags: '태깅설정',
						tab_tag_spamTags_item: '헤더값',
						tab_tag_spamTags_item2: '헤더명',
						tab_tag_spamTags_item3: '수정/삭제',
						tab_tag_spamTags_default: '기본값',
						tab_tag_spamTags_default_usage: '기본값 사용여부',
						tab_tag_add_spamTags: '태깅 추가',
						tab_tag_update_spamTags: '태깅 수정',
						tab_tag_rule: '정책',
						tab_tag_desc: '설명',
						tab_tag_setting: '상태정보',
						tab_tag_select_all: '전체',
						tab_tag_select_rule: '룰',
						tab_tag_select_desc: '상세설명',
						tab_tag_add_rule: '태깅 룰 추가',
						tab_tag_update_rule: '태깅 룰 수정',
						tab_tag_graph: '태깅 현황',
						tab_tag_cond: '조건',
						tab_tag_del_rule: '태깅 룰 삭제',
						
						tab_tag_no_sort_msg: '구분을 지정하여 주십시오.',
						tab_tag_no_type_msg: '타입을 지정하여 주십시오.',
						tab_tag_no_rule_msg: '정책을 입력하여 주십시오.',
						tab_tag_no_overlap: '구분 또는 헤더명이 중복입니다. 다시 입력하여 주십시오.',
						tab_tag_no_overlap2: '정책이 중복됩니다. 다시 입력하여 주십시오.',
						tab_tag_delete_msg: '해당 태그 삭제시 구분값이 ',
						tab_tag_delete_msg2: ' 인 룰도 삭제됩니다. 삭제 하시겠습니까?',
						tab_tag_help2: '  룰을 지정하지 않은 대상에 대해서는 기본값으로 설정됩니다.',
						
						tab_all_to: '이(가)',
						tab_all_to2: '을(를)'
					},
					spamPolicyProcessMethod: {
						recver_exist: '받는사람 계정 검사',
						eml_size: '메시지 크기',
						relay: '릴레이',
						spf: 'SPF',
						pattern: '패턴',
						sender_domain_resolver: '보낸사람 회사',
						recver_domain_resolver: '받는사람 회사',
						grey_listing: '그레이 리스팅',
						user_reject: '사용자 거부',
						helo_resolver: 'HELO 회사',
						contents: '컨텐츠',
						max_hop: '경유 서버 수 제한',
						max_recver: '받는사람 수 제한',
						rbl: 'RBL',
						sender_exist: '보낸사람 계정 검사',
						
						sender_domain_method: '보낸사람 회사 처리방법',
						sender_exist_method: '보낸사람 계정 검사 처리방법',
						recver_domain_method: '받는사람 회사 처리방법',
						recver_exist_method: '받는사람 계정 검사 처리방법',
						recver_max_method: '받는사람 수 제한 처리방법',
						content_eml_size: '메시지 크기 처리방법',
						content_max_hop: '경유 서버 수 제한 처리방법',
						content_contents: '컨텐츠 처리방법',
						content_pattern: '패턴 처리방법'
						
					},
					virusPolicy: {
						help: '  바이러스 정책을 설정 할 수 있습니다.',
						location_1depth: '정책관리',
						location_2depth: '바이러스 정책',
						
						tab_default: '기본 설정',
						tab_default_help: '  송수신되는 회사에 바이러스가 존재하는지 검사하는 기능입니다.',
						usage: '사용여부',
						usage_label_switch_on: '사용',
						usage_label_switch_off: '미사용',
						version: '버전',
						update_time: '업데이트 시간',
						vaccine_name: '백신 명',
						version_info: '버전 정보',
						bd: 'BitDefender',
						tv: 'TurboVaccine',
						file_size_limit: '파일 크기 제한',
						file_size_limit_help: '  파일이 설정한 크기보다 크면 바이러스 검사를 수행하지 않습니다.',
						
						tab_process_method: '바이러스 검출',
						tab_process_method2: '암호화 파일 검출',
						tab_process_method_help: '  바이러스 정책의 처리방법과 응답코드를 설정 할 수 있습니다.',
						tab_process_method_help2: '  암호화 파일 처리방법에 대해 설정 할 수 있습니다.',
						tab_process_method_select_option_default: '수신거부',
						tab_process_method_select_option_del: '삭제',
						tab_process_method_select_option_text: '텍스트 변환',
						tab_process_method_select_option_pass: '원본 전달',
						tab_process_method_textfile_value: '파일 내용 : ',
						tab_process_method_textfile_name: '파일 명 : ',
						
						msg_title: '처리결과',
						msg_content: '해당 설정으로 적용 하시겠습니까?'
						
					},
					virusPolicyProcessMethod: {
						reject: '수신 거부',
					},
					cdrPolicy: {
						help: '  CDR ( Content Disarm & Reconstruction )은 파일에서 악성 코드 를 제거하기위한 컴퓨터 보안 기술입니다. 시스템 정의 및 정책 내에서 승인되지 않은 모든 파일 구성 요소를 제거합니다.',
						location_1depth: '정책관리',
						location_2depth: 'CDR 정책',
						btn_add: '추가',
						btn_close: '닫기',
						btn_submit: '적용',
						
						tab_usage: '사용여부',
						tab_label_switch_on: '사용',
						tab_label_switch_off: '미사용',
						
					},
					urlPolicy: {
						help: '  메일본문에 포함되어 있는 URL을 클릭시, URL 유해성 검사를 진행하는 정책 입니다.',
						location_1depth: '정책관리',
						location_2depth: 'URL 유해성 정책',
						
						tab_usage: '사용여부',
						tab_label_switch_on: '사용',
						tab_label_switch_off: '미사용',
					},
					isolationPolicy: {
						help: '  첨부파일 문서를 html 파일로 제공 또는 CDR처리 문서로 제공하는 정책 입니다.',
						location_1depth: '정책관리',
						location_2depth: '문서 격리화 정책',
						
						tab_usage: '사용여부',
						tab_label_switch_on: '사용',
						tab_label_switch_off: '미사용',
					},
					
					mailBodyPolicy: {
						help: '  CDR 정책을 설정 할 수 있습니다.',
						location_1depth: '정책관리',
						location_2depth: '메일본문',
						switch_on: '사용',
						switch_off: '미사용',
						switch_reconfiguration: '재구성',
						switch_annotation_processing: '주석 처리',
						switch_no_processing: '처리 안함',
						switch_on_the_go_analysis: '이동시 분석',
						switch_removal: '제거',
						switch_allow: '허용',
						btn_close: '닫기',
						btn_submit: '적용',
						select_domain: '회사 선택',
						
						tab_html: 'HTML Mail',
						tab_html_banner: '결과 보기 배너',
						tab_html_image: '이미지 처리',
						tab_html_script: '스크립트/오브젝트 제거',
						tab_html_beacon: '웹 비콘 제거',
						tab_html_hyperlink: '하이퍼 링크',
						tab_html_preview: '미리보기',
						
						tab_html_modal_link_del_title: '링크제거 메시지',
						tab_html_modal_link_del_category: '메시지',
						tab_html_modal_link_del_default: '기본설정값 사용',
						tab_html_modal_safe_browsing_api_key: 'SafeBrowsing API Key',
						tab_html_modal_safe_browsing_client_id: 'SafeBrowsing Client ID',
						
						tab_text: 'Text Mail',
						tab_text_banner: '결과 보기 URL 포함'
					},
					
					attachedFilePolicy: {
						help: '  CDR 정책을 설정 할 수 있습니다.',
						location_1depth: '정책관리',
						location_2depth: '첨부파일',
						switch_on: '사용',
						switch_off: '미사용',
						switch_allow: '허용',
						switch_block: '차단',
						switch_removal: '제거',
						switch_keep: '유지',
						btn_submit: '적용',
						select_domain: '회사 선택',
						
						tab_default: '기본 설정',
						tab_default_reconfiguration: '문서 재구성',
						tab_default_file_size: '파일 크기 제한',
						tab_default_file_size_unit: '(MB)',
						tab_default_limit_size: '크기 제한 초과 시',
						tab_default_extension_modulation: '확장자 변조 파일',
						tab_default_html_file: 'HTML 파일',
						tab_default_script_file: '스크립트 파일',
						tab_default_script_file_help: '  세미콜론(";")으로 구분',
						tab_default_extensions_not_supported: '지원하지 않는 확장자',
						tab_default_isolation: '안전 문서 뷰어',
						
						tab_office: 'MS Office',
						tab_office_obj: '삽입된 객체',
						tab_office_macro: '매크로',
						tab_office_encrypt_doc: '암호 설정 문서',
						tab_office_dde: 'DDE 자동 명령어',
						tab_office_excel_shape: '엑셀 SHAPE',
						
						tab_pdf: 'PDF',
						tab_pdf_java_script: 'JAVA 스크립트',
						tab_pdf_annotations: '주석',
						tab_pdf_actions: '액션',
						
						tab_zip: 'ZIP',
						tab_zip_supported: '지원하는 Zip 확장자',
						tab_zip_encrypt_zip: '암호 설정 Zip 파일',
						tab_zip_include_file: '파일 포함 제한 개수',
						tab_zip_include_file_unit: '(개)',
						tab_zip_include_file_help: '  0이면 제한없음',
						
						tab_etc: 'Etc.',
						tab_etc_hancom: '한컴 오피스',
						tab_etc_ichitaro: '이치타로',
						tab_etc_cad: 'CAD 파일 (DWG,DXF)',
					},
					
					cdrDetailPolicy: {
						help: '  CDR 상세 정책을 설정 할 수 있습니다.',
						location_1depth: '정책관리',
						location_2depth: 'CDR 상세 정책',
						
						btn_submit: '적용',
						
						label_switch_on: 'ON',
						label_switch_off: 'OFF',
						label_switch_deny: '차단',
						label_switch_origin: '원본전송',
						label_switch_download: 'DOWNLOAD',
						label_switch_comment: 'COMMENT',
						label_switch_nothing: 'NOTHING',
						label_switch_image: 'IMAGE',
						label_switch_string: 'STRING',
						
						sd_doc_op_mode: '문서 무해화 모드',
						sd_doc_limit_size: '무해화 처리 제한 크기',
						sd_doc_limit_mode: '사이즈 초과시 처리방법',
						cqms_nor_option_macro: '문서 안에 매크로 제거',
						sd_doc_obj_mode: '문서 안에 객체 제거',
						sd_doc_ddeauto_block_mode: 'DDEAUTO 삭제',
						sd_enc_doc_mode: '암호 설정된 문서 차단',
						sd_enc_zip_mode: '암호설정된 압축파일 차단',
						sd_attached_html_handling:'첨부된 HTML파일의 처리',
						sd_script_block_ext_list:'차단 스크립트 확장자 설정',
						sd_ext_mode:'확장자 위변조 체크',
						sd_except_ext:'확장자 위변조를 체크하지 않는 확장자',
						sd_nosup_ext_mode:'지원하지 않는 확장자 차단',
						cqms_nosup_except_ext:'지원하지 않는 확장자로 차단하지 않는 확장자',
						sd_original_file_import:'무해화에 문제 없으면 원본 전송',
						sd_use_original_zip_password:'ZIP 무해화 후 동일한 암호를 사용하여 압축',
						sd_deny_n_files_over_in_zip:'ZIP에서 파일이 설정값 이상 존재하는 경우 차단',
						sd_supported_zip_ext:'ZIP파일로 인식하는 확장자',
						sd_break_filename_in_zip:'ZIP에서 인식할 수 없는 파일이름의 파일처리',
						sd_doc_old:'MS Office 97 이하에서 생성된 파일의 처리',
						sd_excel_remove_shape_control:'Excel문서의 ActiveX콘트롤 제거',
						sd_pdf_remove_actions:'PDF문서의 Action 제거',
						sd_pdf_remove_annotations:'PDF문서의 주석 제거',
						sd_pdf_remove_java_script:'PDF문서의 JAVA Script 제거',
						sd_remove_script_tag_from_mail_contents:'스크립트 / ActiveX Object 제거 정책',
						sd_remove_web_beacon_from_mail_contents:'WEB BEACON 제거 정책',
						sd_remove_link_from_mail_contents:'HTML본문 안에 LINK 제거',
						sd_removed_link_alert_message:'LINK 제거시 안내 메시지',
						sd_image_sanitize_method_from_html:'HTML본문 안에 다운로드 이미지 처리방법',
						annotate_all_link_if_more_than_certain_number:'A Link가 N개 이상 존재 시 주석처리',
						sd_html_contents_preview_on_outlook:'Ouklook 미리보기 내용표시',
						sd_show_result_url_from_mail_contents:'메일본문에 무해화 결과 URL 링크를 표시',
						sd_sanitize_result_url_host_for_mail_contents:'무해화 결과 화면의 URL설정',
						sd_create_url_from_txt_mail	:'무해화 결과 페이지 URL 생성',
						sd_result_url_filename	:'무해화 결과 페이지 URL 파일 이름',
						sd_create_html_from_mail:'무해화 결과 페이지의 HTML 파일 생성',
						sd_create_result_link_method_from_html:'HTML본문에 무해화 결과 페이지를 표시하는 방식',
						sd_result_link_name_from_html:'무해화 결과 페이지 링크 문자열 설정(링크 표시 방식이 STRING인 경우에만 유효)',
						sd_add_prefix_suffix_to_resultlink_in_txtmail:'TEXT본문의 무해화 결과 페이지 URL 전후에 문자열 추가',
						sd_safe_browsing_api_key:'SafeBrowsing API Key',
						sd_safe_browsing_client_id:'SafeBrowsing Client ID',
						no:'PDF 변환 기능',
						no:'Word문서 내 외부 링크 제거',
						no:'문서 내 위협요소가 포함되어 있지 않은 경우 원본 반입 정책',
					},
					
					certification: {
						title: '비밀번호 확인',
						help: '  환경설정을 접근하기 위한 2차인증이 필요합니다.',
						err_msg: '비밀번호를 다시 확인해 주십시오.',
						btn_confirm: '확인',
						btn_close: '닫기'
					},
					status: {
						event_status_admin_login: '관리자 로그인',
						event_status_admin_logout: '관리자 로그아웃',
						event_status_domain_admin_login: '회사 관리자 로그인',
						event_status_domain_admin_logout: '회사 관리자 로그아웃',
						event_status_user_login: '사용자 로그인',
						event_status_user_logout: '사용자 로그아웃',
						event_status_add_user: '사용자 등록',
						event_status_mail_view: '메일 열람',
						event_status_file_download: '첨부파일 다운로드',
						event_status_processing_result: 'SEG 처리결과 조회',
						event_status_svc_start: '서비스 시작',
						event_status_svc_stop: '서비스 중지',
						event_status_set_db_config: 'DB에서 관리하는 CONFIG 변경',
						event_status_log_down: '로그 다운로드',
						event_status_set_auto_del: '자동삭제 설정 변경',
						event_status_set_smtp: 'SMTP 설정 변경',
						event_status_set_config: 'CONFIG 설정 변경',
						event_status_set_template: '템플릿 수정',
						event_status_admin_user_add: '계정 추가',
						event_status_admin_user_del: '계정 삭제',
						event_status_admin_user_modify: '관리자 계정 수정',
						event_status_domain_admin_user_add: '회사 관리자 계정 추가',
						event_status_domain_admin_user_del: '회사사 관리자 계정 삭제',
						event_status_domain_admin_user_modify: '회사 관리자 계정 수정',
						event_status_user_add: '사용자 계정 추가',
						event_status_user_del: '사용자 계정 삭제',
						event_status_user_modify: '사용자 계정 수정',
						event_status_domain_add: '회사 추가',
						event_status_domain_del: '회사 삭제',
						event_status_domain_modify: '회사 수정',
						event_status_acl_add: '접근권한 추가',
						event_status_acl_del: '접근권한 삭제',
						event_status_acl_modify: '접근권한 수정',
						event_status_org_add: '조직 추가',
						event_status_org_del: '조직 삭제',
						event_status_org_modify: '조직 수정',
						event_status_rule_add: '스팸 룰 추가',
						event_status_rule_del: '스팸 룰 삭제',
						event_status_rule_modify: '스팸 룰 수정',
						event_status_filter_add: '스팸 필터 추가',
						event_status_filter_del: '스팸 필터 삭제',
						event_status_filter_modify: '스팸 필터 수정',
						event_status_equipment_add: '장비 추가',
						event_status_equipment_del: '장비 삭제',
						event_status_equipment_modify: '장비 수정',
						
						event_status_admin_login_err: '관리자 로그인 오류',
						event_status_admin_logout_err: '관리자 로그아웃 오류',
						event_status_domain_admin_id_err: '회사 관리자 ID 오류',
						event_status_domain_admin_pw_err: '회사 관리자 비밀번호 오류',
						event_status_user_login_err: '사용자 로그인 오류',
						event_status_user_logout_err: '사용자 로그아웃 오류',
						event_status_add_user_err: '사용자 등록 오류',
						event_status_user_id_err: '사용자 ID 오류',
						event_status_user_pw_err: '사용자 비밀번호 오류',
						event_status_mail_view_err: '메일 열람 오류',
						event_status_file_download_err: '첨부파일 다운로드 오류',
						event_status_processing_result_err: 'SEG 처리결과 조회 오류',
						event_status_svc_start_err: '서비스 시작 오류',
						event_status_svc_stop_err: '서비스 중지 오류',
						event_status_set_db_config_err: 'DB에서 관리하는 CONFIG 변경 오류',
						event_status_log_down_err: '로그 다운로드 오류',
						event_status_set_auto_del_err: '자동삭제 설정 변경 오류',
						event_status_set_smtp_err: 'SMTP 설정 변경 오류',
						event_status_set_config_err: 'CONFIG 설정 변경 오류',
						event_status_set_template_err: '템플릿 수정 오류',
						event_status_admin_user_add_err: '관리자 계정 추가 오류',
						event_status_admin_user_del_err: '관리자 계정 삭제 오류',
						event_status_admin_user_modify_err: '관리자 계정 수정 오류',
						event_status_user_add_err: '사용자 계정 추가 오류',
						event_status_user_del_err: '사용자 계정 삭제 오류',
						event_status_user_modify_err: '사용자 계정 수정 오류',
						event_status_domain_add_err: '회사 추가 오류',
						event_status_domain_del_err: '회사 삭제 오류',
						event_status_domain_modify_err: '회사 수정 오류',
						event_status_acl_add_err: '접근권한 추가 오류',
						event_status_acl_del_err: '접근권한 삭제 오류',
						event_status_acl_modify_err: '접근권한 수정 오류',
						event_status_org_add_err: '조직 추가 오류',
						event_status_org_del_err: '조직 삭제 오류',
						event_status_org_modify_err: '조직 수정 오류',
						event_status_rule_add_err: '스팸 룰 추가 오류',
						event_status_rule_del_err: '스팸 룰 삭제 오류',
						event_status_rule_modify_err: '스팸 룰 수정 오류',
						event_status_filter_add_err: '스팸 필터 추가 오류',
						event_status_filter_del_err: '스팸 필터 삭제 오류',
						event_status_filter_modify_err: '스팸 필터 수정 오류',
						event_status_equipment_add_err: '장비 추가 오류',
						event_status_equipment_del_err: '장비 삭제 오류',
						event_status_equipment_modify_err: '장비 수정 오류',
						
						event_status_err_unknown: '알수없는 오류'
					},
					recordStatus:{
						auth_fail: '인증 실패',
						sender_unknown: '알수없는 보낸사람',
						receiver_unknown: '알수없는 받는사람',
						relay_deny: '릴레이 거부',
						over_eml_size: '메일 용량 초과',
						over_hop_count: '경유서버 개수 초과',
						send_email: '메일 수신',
						queued: '발송대기',
						queued_seg: 'SEG 대기',
						queued_mirror: '미러링',
						rep_saved: '사본 저장',
						queued_seg_in: '방역 요청',
						queued_seg_out: 'CDR 요청',
						seg_virus_unset: '바이러스 검사 사용 안함',
						seg_virus_pass: '바이러스 검사 정상', //바이러스 검사 통과
						seg_virus_deleted: '바이러스 파일 삭제', //바이러스 제거
						seg_virus_disinfected: '바이러스 치료',
						seg_virus_infected: '바이러스 감염',
						seg_virus_suspected: '바이러스 의심',
						seg_virus_encryption: '암호화된 파일',
						seg_requested: 'SEG 처리요청',
						seg_grey_unset: 'GREY 사용 안함',  //spam start
						seg_grey_pass: 'GREY 정상', //스팸_GREY 통과
						seg_grey_reject: 'GREY 차단', //스팸 GREY
						seg_grey_except: 'GREY 예외',
						seg_rbl_unset: 'RBL 사용 안함',
						seg_rbl_pass: 'RBL 통과', //스팸_RBL 통과
						seg_rbl_reject: 'RBL 차단', //스팸 RBL
						seg_rbl_except: 'RBL 예외',
						seg_spf_unset: 'SPF 사용 안함',
						seg_spf_pass: 'SPF 통과', // 스팸 SPF 통과
						seg_spf_reject: 'SPF 차단', //스팸 SPF 차단
						seg_spf_except: 'SPF 예외',
						seg_hdr_unset: 'HELO 회사 검사 사용 안함',
						seg_hdr_pass: 'HELO 회사 검사 통과', //스팸_HELO 회사 검사 통과
						seg_hdr_reject: 'HELO 회사 검사 차단', //스팸_HELO 회사 검사 차단
						seg_hdr_except: 'HELO 회사 검사 예외',
						seg_sdr_unset: '보낸사람 회사 검사 사용 안함',
						seg_sdr_pass: '보낸사람 회사 검사 통과', //스팸_보낸사람 회사 검사 통과
						seg_sdr_reject: '보낸사람 회사 검사 차단', //스팸_보낸사람 회사 검사 차단
						seg_sdr_except: '보낸사람 회사 검사 예외',
						seg_rdr_unset: '받는사람 회사 검사 사용 안함',
						seg_rdr_pass: '받는사람 회사 검사 통과', //스팸_받는사람 회사 검사 통과
						seg_rdr_reject: '받는사람 회사 검사 차단', //스팸_받는사람 회사 검사 차단
						seg_rdr_except: '받는사람 회사 검사 예외',
						seg_smr_unset: '보낸사람 메일주소 검사 사용 안함',
						seg_smr_pass: '보낸사람 메일주소 검사 통과',
						seg_smr_reject: '보낸사람 없음',
						seg_smr_except: '보낸사람 메일주소 검사 예외',
						seg_rmr_unset: '받는사람 메일주소 검사 사용 안함',
						seg_rmr_pass: '받는사람 메일주소 검사 통과',
						seg_rmr_reject: '받는사람 없음',
						seg_rmr_except: '받는사람 메일주소 검사 예외',
						seg_relay_unset: '릴레이 사용안함',
						seg_relay_pass: '릴레이 통과',  //스팸_릴레이 통과
						seg_relay_reject: '릴레이 차단', //스팸 릴레이
						seg_relay_except: '릴레이 예외',
						seg_eml_size_unset: '메일 크기 제한 사용안함',
						seg_eml_size_pass: '메일 크기 제한 통과',
						seg_eml_size_reject: '메일 크기 제한 차단',
						seg_eml_size_except: '메일 크기 제한 예외',
						seg_max_hop_unset: '경유서버 수 제한 사용안함',
						seg_max_hop_pass: '경유서버 수 제한 통과',
						seg_max_hop_reject: '경유서버 수 제한 차단',
						seg_max_hop_except: '경유서버 수 제한 예외',
						seg_contents_unset: '컨텐츠 필터 사용안함',
						seg_contents_pass: '컨텐츠 필터 통과',
						seg_contents_reject: '컨텐츠 필터 차단',
						seg_contents_except: '컨텐츠 필터 예외',
						seg_pattern_unset: '패턴 필터 사용안함',
						seg_pattern_pass: '패턴 필터 통과',
						seg_pattern_reject: '패턴 필터 차단',
						seg_pattern_except: '패턴 필터 예외',
						seg_user_reject_unset: '사용자 정의 차단 사용안함',
						seg_user_reject: '사용자 정의 차단',
						seg_user_except_unset: '사용자 정의 예외 사용안함',
						seg_user_except: '사용자 정의 예외',
						delivery_sent: '메일 배달',
						seg_spam_act_unset: '스팸차단 사용안함',
						seg_spam_act_pass: '스팸 통과', //스팸 통과
						seg_spam_act_reject: '수신거부', //스팸 차단
						seg_spam_act_except: '스팸 에외',
						seg_spam_act_update_subject: '스팸 메일 제목변경',
						seg_spam_act_add_hdr: '스팸 메일 헤더 추가',
						seg_virus_act_unset: '바이러스 사용안함',
						seg_virus_act_pass: '바이러스 통과', //바이러스 통과
						seg_virus_act_reject: '바이러스 차단', //바이러스 차단
						seg_virus_act_except: '바이러스 예외',
						seg_virus_act_delete: '바이러스 파일 삭제',
						seg_virus_act_conv_text: '바이러스 파일 텍스트 파일로 변환',
						seg_virus_act_update_subject: '바이러스 메일 제목변경',
						seg_virus_act_add_hdr: '바이러스 메일 헤더추가',
						seg_cdr_act_unset: '문서무해화 사용안함',
						seg_cdr_act_pass: '문서무해화 통과', //문서무해화 통과
						seg_cdr_act_reject: '문서무해화 차단', //문서무해화 차단
						seg_cdr_act_except: '문서무해화 예외',
						seg_cdr_act_delete: '문서무해화 파일 삭제',
						seg_cdr_act_conv_text: '텍스트 파일로 변환',
						seg_cdr_act_file_isolation: '파일 격리',
						seg_cdr_act_update_subject: '문서무해화 메일 제목변경',
						seg_cdr_act_add_hdr: '문서무해화 메일 헤더추가',
						seg_cdr_unset: 'CDR 사용안함',
						seg_cdr_pass: 'CDR 정상',
						seg_cdr_delete: 'CDR 불필요한 자료 제거',
						seg_cdr_encryption: '암호화된 파일',
						seg_over_max_retry_drop: '방역 실패로 메일 삭제',
						seg_over_max_retry_send_original_eml: '방역 실패로 원본 전달',
						seg_over_max_retry_send_alarm_recver: '방역 실패로 받는사람에게 알림메일 전달',
						seg_over_max_retry_send_alarm_sender: '방역 실패로 보낸사람에게 리턴메일 전달',
						seg_tag_unset: '태그 사용안함',
						seg_tag_pass: '태그 통과',
						seg_tag_reject: '태그 차단',
						seg_tag_except: '태그 예외',
						seg_tag_add: '태그 추가',
						seg_recver_count_unset: '수신자 수 제한 사용안함',
						seg_recver_count_pass: '수신자 수 제한 통과',
						seg_recver_count_reject: '수신자 수 제한 차단',
						seg_recver_count_except: '수신자 수 제한 예외',
						seg_scam_unset: 'Scam 사용안함',
						seg_scam_pass: 'Scam 통과',
						seg_scam_reject: 'Scam 차단',
						seg_scam_except: 'Scam 예외',
						
						err_bad_command: 'SMTP 명령어 오류',
						err_eml_parsing: 'EML 파싱 오류',
						err_queuing: '발송 대기 오류',
						err_queuing_seg: '미러링 오류',
						err_queuing_mirror: '미러링 임시저장 오류',
						err_rep_save: '사본 저장 오류',
						err_seg_req_temp: '방역 요청 일시적 오류',
						err_seg_req_perm: '방역 요청 실패',
						err_seg_out_temp: 'CDR 요청 일시적 오류',
						err_seg_out_perm: 'CDR 요청 실패',
						err_chk_virus: '바이러스 검사 오류',
						err_chk_cdr: 'CDR 처리 오류',
						err_seg_temp: 'SEG 처리 일시적 오류',
						err_seg_perm: 'SEG 처리 실패',
						
						err_seg_grey: 'GREY 오류',
						err_seg_rbl: 'RBL 오류',
						err_seg_spf: 'SPF 오류',
						err_seg_hdr: 'HELO 회사 검사 오류',
						err_seg_sdr: '보낸사람 회사 검사 오류',
						err_seg_rdr: '받는사람 회사 검사 오류',
						err_seg_smr: '보낸사람 메일주소 검사 오류',
						err_seg_rmr: '받는사람 메일주소 검사 오류',
						err_seg_relay: '릴레이 검사 오류',
						err_seg_eml_size: '메일 크기 제한 오류',
						err_seg_max_hop: '경유서버 수 제한 오류',
						err_seg_contents: '컨텐츠 필터 오류',
						err_seg_pattern: '패턴 필터 오류',
						err_seg_user_reject: '사용자 정의 차단 오류',
						err_seg_user_except: '사용자 정의 예외 오류',
						err_seg_virus: '바이러스 처리 오류',
						err_seg_cdr: 'CDR 처리 오류',
						
						err_delivery_temp: '메일배달 일시적 오류',
						err_delivery_perm: '메일배달 실패',
						
						err_none: '일반적 오류'
					}
				}
			},
			"ja-JP":{
				translation:{
					login:{
						save_id: 'ID保存',
						login:'ログイン',
						register: 'サインアップ'
					},
					errNotiMsg:{
						msg_title:'処理結果',
						msg_content_0:'セッションが終了しました。\nしばらくしてから再度試してください。',
						msg_content_1:'要求されたURL情報が有効ではありません。',
						msg_content_2:'要求されたデータ情報が有効ではありません。',
						msg_content_3:'IDまたはパスワードが間違っています。',
						msg_content_4:'許可されていないIPです。',
						msg_content_5:'DBエラーです。<br>しばらくしてから再度試してください。',
						msg_content_6:'ログインしていません。',
						msg_content_7:'ライセンスが無効です。',
						msg_content_8:'データがありません。',
						msg_content_9: '一時的なエラーが発生しました。<br>しばらくしてから再度試してください。',
						msg_content_10:'入力した情報を再確認してください。',
						msg_content_11: 'メールソースが見つかりませんでした。',
						msg_content_12: 'IP形式が正しくありません。再度確認してください。',
						msg_content_13: '一時的なエラーが発生しました。<br>しばらくしてから再度試してください。',
						msg_content_14: 'URL形式が正しくありません。<br>再度確認してください',
						msg_content_17: '受信者情報が一致しません。',
						msg_success_title: '成功',
						msg_success_content_0: '削除しました。',
						msg_success_content_1: 'バックアップしました。'
					},
					leftmenu:{
						dashboard:'ダッシュボード',
						monitoring:'監視',
						mail_monitoring:'メール監視',
						mail_list: 'メールリスト',
						event_monitoring:'イベント監視',
						service_monitoring:'サービス監視',
						log_monitoring:'ログ監視',
						queue_monitoring:'キュー監視',
						system_monitoring:'システム監視',
						statistics:'統計',
						policy_manager:'ポリシー管理',
						spam_policy:'迷惑メールポリシー',
						virus_policy:'マルウェアポリシー',
						cdr_policy:'CDRポリシー',
						url_policy: 'URL有害なポリシー',
						isolation_policy: 'ドキュメント分離ポリシー',
						preferences:'システム設定',
						domain_preference:'ドメイン設定',
						autoDelete_preference:'自動削除設定',
						smtp_preference:'SMTP設定',
						config_preference:'コンフィグ設定',
						notices_preference:'通知設定',
						admin_preference:'管理者設定',
						user_preference:'ユーザー/組織設定',
						equipment_preference:'サーバー管理',
						product_information:'製品情報',

						mail_body_policy: 'メール本文ポリシー',
						attached_file_policy: '添付ファイル',
						cdr_detail_policy: 'CDR 詳細政策'
					},
					header:{
						notice:'通知',
						admin:'管理者',
						connect_country:'国',
						connect_ip:'接続元IP',
						connect_time:'最終ログイン'
					},
					logout:{
						header:'ログアウト',
						msg:'ログアウトしますか?',
						apply:'はい',
						cancel:'いいえ'
					},
					dashboard:{
						help:'  ダッシュボードページでは,全ての状況を見ることができます。',
						location:'ダッシュボード',
						system_usage:'システム状況',
						system_usage_cpu:'CPU使用率',
						system_usage_memory:'メモリー使用率',
						system_usage_disk:'ストレージ使用量',
						system_usage_networkRx:'ネットワーク受信量 (bps)',
						system_usage_networkTx:'ネットワーク送信量 (bps)',
						system_usage_cpu_warning_noti:'[CPU利用率] 警告レベル',
						system_usage_cpu_danger_noti:'[CPU利用率] 危険レベル',
						system_usage_memory_warning_noti:'[メモリ利用量] 警告レベル',
						system_usage_memory_danger_noti:'[メモリ利用量] 危険レベル',
						system_usage_disk_warning_noti:'[ディスク利用量] 警告レベル',
						system_usage_disk_danger_noti:'[ディスク利用量] 危険レベル',
						system_usage_networkRx_warning_noti:'[ネットワーク受信量] 警告レベル',
						system_usage_networkRx_danger_noti:'[ネットワーク受信量] 危険レベル',
						system_usage_networkTx_warning_noti:'[ネットワーク送信量] 警告レベル',
						system_usage_networkTx_danger_noti:'[ネットワーク送信量] 危険レベル',
						system_usage_anynoti: '％を超える',
						abatement:'無害化状況',
						abatement_division:'期間',
						abatement_spam:'迷惑メール',
						abatement_virus:'マルウェア',
						abatement_cdr:'CDR',
						abatement_normal:'正常',
						abatement_today:'今日',
						abatement_integrated:'合計',
						amountOfSendRecv:'メール送受信',
						amount_division:'期間',
						amount_send:'送信',
						amount_recv:'受信',
						amount_send_recv:'内部',
						amount_relay:'リレー',
						sender_top5:'送信者 TOP5',
						sender_no:'No.',
						sender_title:'送信メールアドレス',
						sender_count:'件数',
						sender_domain_top5:'送信者ドメインTOP5',
						sender_domain_no:'No.',
						sender_domain_title:'ドメイン',
						sender_domain_count:'件数',
						sender_domain_no_title: '送信者ドメインなし',
						sender_country_top5:'送信国TOP5',
						sender_country_no:'No.',
						sender_country_title:'国名',
						sender_country_count:'件数',
						recver_top5:'受信者 TOP5',
						recver_no:'No.',
						recver_title:'受信メールアドレス',
						recver_count:'件数',
						recver_domain_top5:'受信者ドメインTOP5',
						recver_domain_no:'No.',
						recver_domain_title:'ドメイン',
						recver_domain_count:'件数',
						recver_domain_no_title: '受信者ドメインなし',
						graph_send:'送信',
						graph_recv:'受信',
						graph_rs:'内部',
						graph_relay:'リレー',
						graph_spam:'迷惑メール',
						graph_virus:'マルウェア',
						graph_cdr:'CDR',
						graph_normal:'正常',
						graph_integrated:'合計' 
					},
					maillist:{
						help:'  メールの監視状況確認と検索ができます。',
						location_1depth:'監視',
						location_2depth:'メール監視',
						total:'すべて',
						count:'件',
						search_select_term:'期間設定',
						search_sender:'送信元アドレス',
						search_recver:'宛先アドレス',
						search_title:'件名',
						search_file:'添付ファイル',
						search_mail_process:'検索オプション',
						search_sent_type:'メール処理分類',
						search_sent_type_send:'送信',
						search_sent_type_recv:'受信',
						search_sent_type_rs:'内部',
						search_sent_type_relay:'リレー',
						search_sent_type_mirror:'ミラー',
						search_final_stat:'アカウント',
						search_sender_unknown:'送信者不明',
						search_receiver_unknown:'受信者不明',
						search_relay_deny:'リレー拒否',
						search_success_delivery_temp:'転送成功',
						search_err_delivery_temp:'転送失敗',
						search_abatement:'無害化',
						search_abatement_spam:'迷惑メール',
						search_abatement_virus:'マルウェア',
						search_abatement_cdr:'CDR',
						search_abatement_normal:'正常',
						search_etc:'その他',
						search_etc_file:'添付ファイルを含む',
						search_etc_dsn:'メール通知',
						search_mid: 'メールID',
						search_country:'国',
						search_all_country:'すべて',
						search_select_country:'国を選択',
						search_mail_delivery:'メール転送',
						search_help1:'メール処理項目',
						search_help2:' "選択しない"',
						search_help3:'場合、すべてを対象に検索します。',
						close:'閉じる',
						submit:'検索',
						btn_submit:'適用',
						list_date:'日時',
						list_sender:'送信元アドレス',
						list_recver:'宛先アドレス',
						list_sent_type:'分類',
						list_title:'件名',
						list_process:'処理ステータス',
						list_sent_type_send:'送信',
						list_sent_type_recv:'受信',
						list_sent_type_rs:'内部',
						list_sent_type_relay:'リレー',
						list_sent_type_mirror:'ミラー',
						list_sent_type_dsn:'通知メール',
						list_file:'添付ファイル',
						list_size:'サイズ',
						list_detail:'詳細',
						list_country:'国',
						list_process_spam:'S',
						list_process_spam_tooltip:'スパム',
						list_process_virus:'M',
						list_process_virus_tooltip:'マルウェア',
						list_process_cdr:'C',
						list_process_cdr_tooltip:'CDR',
						list_process_delivery:'D',
						list_process_delivery_tooltip:'配送',
						list_no_title:'(件名なし)',
						list_mail_datail:'詳細表示',
						list_country_null:'情報なし',
						list_etc_menu_header:'ヘッダ表示',
						list_etc_menu_resend:'再送',
						list_etc_menu_spam:'迷惑メール報告',
						list_etc_menu_spam2:'迷惑メール登録',
						list_etc_menu_eml_down:'オリジナル保存',
						list_etc_menu_exception:'例外設定',
						list_etc_menu_exception_title:'例外設定',
						list_etc_menu_exception_item:'例外条件',
						list_etc_menu_spam_register_title: 'スパム登録',
						list_etc_menu_spam_register_item: 'スパム条件',
						list_etc_menu_exception_item_ip:'IP',
						list_etc_menu_exception_item_sender:'送信者',
						list_etc_menu_exception_item_recver:'受信者',
						list_etc_menu_exception_item_domain:'ドメイン',
						list_etc_menu_exception_item_send_domain: '送信者ドメイン',
						list_etc_menu_exception_item_recv_domain: '受信者ドメイン',
						list_etc_menu_exception_item_email:'メール',
						list_etc_menu_exception_item2_or:'を含む',
						list_etc_menu_exception_item2_and:'と一致する',
						list_etc_menu_exception_item2_start:'で始まる',
						list_etc_menu_exception_item2_end:'で終わる',
						list_etc_menu_exception_item_help:'例外処理にルールを登録すると、登録後から受信されるメールの中でルールに該当するメールは検査を行いません。',
						list_etc_menu_spam_register_item_help:'迷惑メールの登録は、送信者、受信者、送信者ドメイン、受信者ドメイン、およびIPに設定できます。 設定後に同じ条件が設定されていると、受信メールはブロックされます。',
						process_result_title:'処理結果',
						process_spam_result_title:'迷惑メール処理結果',
						process_virus_result_title:'マルウェア処理結果',
						process_cdr_result_title:'CDR処理結果',
						process_delivery_result_title: '配送結果',
						process_result_date:'日時',
						process_result_stat:'ステータス',
						process_result_info:'詳細',
						process_result_file_name:'ファイル名',
						process_result_virus_stat:'スキャン結果',
						process_result_virus_name:'マルウェア名',
						process_result_cdr_stat:'CDR結果',
						process_result_cdr_detail:'CDR詳細',
						process_result_cdr_image:'画像',
						process_result_issue:'結果',
						process_result_block:'ブロック',
						process_result_pass:'完了',
						process_result_crypt: 'ファイルパスワード',
						original_eml_title:'メールヘッダー表示',
						detail_history:'履歴',
						detail_history_date:'日時',
						detail_history_stat:'ステータス',
						detail_history_info:'詳細',
						detail_history_list_chk_spam:'迷惑メール処理',
						detail_history_list_chk_virus:'マルウェア処理',
						detail_history_list_chk_cdr:'CDR処理',
						detail_history_list_pass:'完了',
						detail_history_virus_list_pass:'正常',
						detail_history_list_block:'ブロック',
						detail_history_list_delete:'削除',
						detail_history_list_disinfected:'駆除',
						detail_history_list_infected:'検知',
						detail_history_list_suspected:'感染の疑い',
						detail_history_list_spam:'スパムの例外',
						detail_history_list_drm:'暗号化されたファイル',
						detail_history_cdr_list_pass:'正常',
						detail_history_cdr_list_unset:'処理しない',
						file_detail_title:'ファイル詳細',
						file_detail_filename:'ファイル名',
						file_detail_filesize:'ファイルサイズ',
						file_detail_encode:'エンコード',
						file_detail_etc:'備考',
						mail_tracking:'メールトラッキング',
						mail_tracking_date:'日時',
						mail_tracking_flag:'国旗',
						mail_tracking_country:'国',
						mail_tracking_ip:'IP',
						mail_view:'メール表示',
						mail_view_send:'送信元:',
						mail_view_recv:'宛先:',
						mail_view_cc:'Cc:',
						mail_image_view:'画像表示',
						mail_image_view_hidden:'画像非表示',
						mail_image_view_noti:'個人情報を保護するために一部のコンテンツを一時的にブロックしました。',
						mail_original_eml: 'オリジナルメール',
						mail_quarantine_eml: '検疫メール',
						mail_parse_type_file_send: 'ファイル転送',
						mail_recver_mail_input: '受信者メールアドレス入力',

						mail_parse_type_body:'本文',
						mail_parse_type_cid:'本文イメージ',
						mail_parse_type_html:'HTML',
						mail_parse_type_text:'TEXT',
						mail_parse_type_attach:'添付ファイル',
						mail_resend_noti: '再転送の要求を行いました。<br>、この機能は2分間動作しません。',
						mail_resend_noti2: 'メールアドレスにファイルが伝達しました。',
						mail_two_min_title: '情報',
						mail_two_min_noti:'しばらく後に再度試してください。',

						//pass
						sd_external_error_export_success: '無害化', //200000
						sd_external_error_export_bypass_from_exceptlist: '[無害化例外]管理者ポリシー(ファイル)', //230133
						sd_external_error_export_bypass_from_user_specific_exceptlist: '[無害化例外]管理者ポリシー(ユーザー)', //230153
						sd_external_error_export_bypass_from_not_support_ext: '[無害化例外]サポート対象外の拡張子', //230213
						sd_external_error_export_bypass_from_except_extension: '[無害化例外]例外設定の拡張子', //230223
						sd_external_error_export_bypass_from_password_protected_ziparchive: '[無害化例外]パスワード付き圧縮ファイル', //230233
						sd_external_error_export_bypass_from_password_protected: '[無害化例外]パスワード付き文書ファイル', //230243
						sd_external_error_export_bypass_from_pe_limit_size: '[無害化例外]ファイルサイズ制限超過(実行ファイル)', //230253
						sd_external_error_export_bypass_from_doc_limit_size: '[無害化例外]ファイルサイズ制限超過(文書ファイル)', //230263
						sd_external_error_export_bypass_from_not_support_executable_archive: '[無害化例外]実行可能圧縮ファイル', //230273
						sd_external_error_export_bypass_from_break_filename_encoding_in_zip: '[無害化例外]圧縮ファイル内に認識できないファイル名あり', //230283
						sd_external_error_export_bypass_filetype_policy: '[無害化例外]ファイル形式ポリシー', //230293
						sd_external_error_export_bypass_encryption_zip: '[無害化例外]パスワード付き圧縮ファイル', //230294
						sd_external_error_export_bypass_from_attached_html_file: '[無害化例外]HTMLでないファイル拡張子', //230303
						sd_external_error_export_bypass_does_not_support_file_version: 'サポート対象外の古いバージョンのファイル', //900061

						//reject
						sd_external_error_export_deny_from_blacklist: '[受信ブロック]管理ポリシー(ファイル)', //210121
						sd_external_error_export_deny_from_user_specific_blacklist: '[受信ブロック]管理ポリシー(ユーザー)', //210151
						sd_external_error_export_deny_from_not_support_ext: '[受信ブロック]サポート対象外拡張子', //210211
						sd_external_error_export_deny_from_password_protected_ziparchive: '[受信ブロック]パスワード付き圧縮ファイル', //210231
						sd_external_error_export_deny_from_invalid_password_archive: '[受信ブロック]パスワードエラー(圧縮ファイル)', //210236
						sd_external_error_export_deny_from_password_protected: '[受信ブロック]パスワード付き文書ファイル(ポリシー)', //210241
						sd_external_error_export_deny_from_invalid_password_doc: '[受信ブロック]パスワードエラー（文書ファイル)', //210246
						sd_external_error_export_deny_from_pe_limit_size: '[受信ブロック]実行ファイルサイズ制限超過(実行可能ファイル)', //210251
						sd_external_error_export_deny_from_doc_limit_size: '[受信ブロック]実行ファイルサイズ制限超過(文書ファイル)', //210261
						sd_external_error_export_deny_from_not_support_executable_archive: '[ブロック]実行可能圧縮ファイル', //210271
						sd_external_error_export_deny_from_break_filename_encoding_in_zip: '[ブロック]圧縮ファイル内に認識できないファイル名', //210281
						sd_external_error_export_deny_from_file_length_limit: '[ブロック] 260文字を超えるファイル名 ', //210291
						sd_external_error_export_deny_from_n_files_over_in_zip: '[ブロック] 圧縮されたファイル数制限超過', //210311
						sd_external_error_export_deny_from_attached_html_file: '[ブロック]添付されたHTMLファイル', //210321
						sd_external_error_export_suspect_apt_hwp_file: '[ブロック]HWP悪用', //220315
						sd_external_error_export_suspect_apt_office_file: '[ブロック]Office悪用', //220325
						sd_external_error_does_not_support_executable_archive: '[ブロック]実行可能圧縮ファイル', //220335
						sd_external_error_modified_file_extension_type_1: '[ブロック]拡張子不一致', //220345
						sd_external_error_modified_file_extension_type_2: '[ブロック]拡張子偽造', //220355
						sd_external_error_export_deny_from_pe_in_zip_mnd_only: '[ブロック]圧縮ファイル内にEXEファイルが存在します', //220365
						sd_external_error_export_deny_from_0_files_in_zip: '[ブロック]圧縮ファイルの中にファイルが存在しない', //220375
						sd_external_error_force_encryption_failed: '[ブロック]DS暗号化エラー', //810809
						sd_external_error_does_not_support_file_extension_from_ds_localset: '[ブロック]DS暗号化サポート対象外拡張子', //810812
						sd_external_error_bad_casting: '[無害化エラー]静的キャストエラー', //900011
						sd_external_error_invalid_options: '[無害化エラー]無効なオプション(COM関連)', //900012
						sd_external_error_invalid_header_from_options: '[無害化エラー]無効なオプション(API関連)', //900013
						sd_external_error_make_stup_failed: '[無害化エラー]実行可能ファイル', //900014
						sd_external_error_copy_file_failed: '[無害化エラー]ファイルコピー失敗', //900015
						sd_external_error_move_file_failed: '[無害化エラー]ファイル移動失敗', //900016
						sd_external_error_create_vrf_temp_failed: '[無害化エラー]一時フォルダー作成失敗', //900017
						sd_external_error_string_format_failed: 'StringCchPrintf失敗', //900018
						sd_external_error_invalid_file_from_archive: 'Zip無害化で認識できない不明なファイル', //900019
						sd_external_error_load_library_failed: '[無害化エラー]ライブラリエラー(DLL関連))', //900020
						sd_external_error_file_does_not_exist: '[無害化エラー]ファイルが存在しない', //900021
						sd_external_error_exploit_detected: '[無害化エラー]悪性コードの疑いでブロック', //900022
						sd_external_error_aspose_slides_undefined: '[無害化エラー]Powerpointコンテンツ抽出エラー', //900028
						sd_external_error_aspose_words_undefined: '[無害化エラー]Wordコンテンツ抽出エラー', //900037
						sd_external_error_aspose_cells_undefined: '[無害化エラー]Excelコンテンツ抽出エラー', //900041
						sd_external_error_aspose_images_loading_failed: '[無害化エラー]イメージコンテンツ抽出エラー', //900042
						sd_external_error_aspose_pdf_undefined: '[無害化エラー]PDFコンテンツ抽出エラー', //900043
						sd_external_error_aspose_eml_attachment_extract_fail: 'EMLコンテンツ抽出エラー', //900044
						sd_external_error_aspose_eml_attachment_assemble_fail: 'EMLコンテンツ組み合わせエラー', //900045
						sd_external_error_cad_convert_fail: 'CADコンテンツ抽出エラー', //900046
						sd_external_error_html_python_routine_failed: 'Python Beatifulsopu4失敗', //900047
						sd_external_error_ichitaro_converting_failed: '一太郎コンバート失敗', //900048
						sd_external_error_ichitaro_python_socket_failed: '一太郎ソケット通信失敗', //900049
						sd_external_error_text_reassemble_failed: 'Text本文再構成失敗', //900050
						sd_external_error_e_outofmemory: '[無害化エラー]メモリ不足', //900051
						sd_external_error_e_abort: '[無害化エラー]無害化中止', //900052
						sd_external_error_e_nointerface: '[無害化エラー]インターフェースエラー', //900053
						sd_external_error_e_invalidarg: '[無害化エラー]パラメータエラー', //900054
						sd_external_error_e_unexpected: '[無害化エラー]不明なエラー', //900055
						sd_external_error_e_filesize_0: '[無害化エラー]ファイルサイズ0byte', //900056
						sd_external_error_aspose_slides_check_macro: '[無害化エラー]マクロチェックエラー(スライド)', //900057
						sd_external_error_aspose_cells_check_macro: '[無害化エラー]マクロチェックエラー(セル)', //900058
						sd_external_error_aspose_words_check_macro: '[無害化エラー]マクロチェックエラー(ワード)', //900059
						sd_external_error_does_not_support_file_version: '[ブロック]サポート対象外の古いバージョンファイル', //900060
						sd_external_error_zip_extract_fail_export_deny: 'ZIPファイルコンテンツ破損', //900063
						sd_external_error_modified_file_extension_type_3: '[ブロック] 偽造または変更された受信ファイル' //900064
						
					},
					eventlist:{
						help:'  システム稼働中に発生するイベントの確認や検索ができます。',
						location_1depth:'監視',
						location_2depth:'イベント監視',
						total:'すべて',
						count:'件',
						select_option_all:'すべて',
						select_option_id: 'ID',
						select_option_ip:'接続元IP',
						select_option_desc:'詳細',
						list_time:'日時',
						list_id: 'ID',
						list_ip:'接続元IP',
						list_content:'イベント',
						list_desc:'詳細',
						filter_option_all: 'すべてのイベント',
						filter_option_error: 'エラー',
						filter_option_login: 'ログイン',
						filter_option_mailitem: 'メール',
						filter_option_svc: 'サービス',
						filter_option_log: 'ログ',
						filter_option_config: '設定',
						filter_option_add: '管理（追加）',
						filter_option_del: '管理（削除）',
						filter_option_modify: '管理（変更）'
					},
					servicelist:{
						help:'  サービスのステータス確認、サービスを開始及び停止できます。',
						location_1depth:'監視',
						location_2depth:'サービス監視',
						seg_smtp:'SEG SMTP',
						seg_smtp_start:'起動',
						seg_smtp_stop:'停止',
						seg_cron:'CRON',
						seg_cron_start:'起動',
						seg_cron_stop:'停止',
						seg_spam:'スパム',
						seg_spam_start:'起動',
						seg_spam_stop:'停止',
						seg_virus:'マルウェア',
						seg_virus_start:'起動',
						seg_virus_stop:'停止',
						seg_cdr:'CDR',
						seg_cdr_start:'起動',
						seg_cdr_stop:'停止',
						service_on:'実行中',
						service_off:'停止'
					},
					logmoniter:{
						help:'  ログファイルを確認することができます。',
						location_1depth:'監視',
						location_2depth:'ログファイル監視',
						total:'すべて',
						count:'件',
						log_type:'ログの種類',
						log_list_modify_time:'ファイルの更新日時',
						log_list_filename:'ログファイル名',
						log_list_filesize:'ファイルサイズ',
						log_list_down:'ダウンロード',
						
					},
					queuelist:{
						help:'  キューイング(処理待ち)状況を確認できます。処理に時間がかかる場合は管理者の判断でキューの削除および復元ができます。',
						location_1depth:'監視',
						location_2depth:'キュー監視',
						equipment1:'サーバー1',
						equipment2:'サーバー2',
						queue_list_folder:'キューフォルダ',
						queue_list_normal_count:'ファイル数',
						queue_list_queue_count:'キューファイルの数',
						queue_list_queue_time:'最も古いキューイング時間',
						queue_list_desc:'詳細',
						queue_list_detail_btn:'詳細',
						queue_modal_title:'SMTPキューの詳細',
						queue_modal_sub_dt_title1:'SMTPキュー',
						queue_modal_sub_dt_title2:'詳細',
						queue_modal_dt_list_file:'キューファイル情報',
						queue_modal_dt_list_size:'メールサイズ',
						queue_modal_dt_list_time:'ファイル更新時間',
						queue_modal_sub_nm_title1:'SMTPキュー',
						queue_modal_sub_nm_title2:'ファイル情報',
						queue_modal_nm_list_file:'キューファイル情報',
						queue_modal_nm_list_size:'メールサイズ',
						queue_modal_nm_list_time:'ファイル更新時間',
						queue_modal_list_etc:'削除とバックアップ',
						queue_modal_detail_title:'キューファイルの詳細情報',
						queue_modal_detail_title2:'ファイルの詳細情報',
						queue_modal_detail_list_time:'受信時間',
						queue_modal_detail_list_ip:'IP',
						queue_modal_detail_list_sender:'送信元',
						queue_modal_detail_list_recver:'宛先',
						queue_modal_detail_list_result:'結果(リトライ回数)',
						queue_modal_detail_list_detail_info:'詳細',
						close:'閉じる',
						queue_mail: 'メール送信',
						queue_seg_in: '検疫要求',
						queue_seg_out: '検疫完了'
					},
					systemMoniter:{
						help:'  サーバーリソースの状況やリソース利用率による警告メッセージを確認できます。',
						location_1depth:'監視',
						location_2depth:'システム監視',
						equipment1:'サーバー1',
						equipment2:'サーバー2',
						graph:'グラフ',
						graph_daily:'1日',
						graph_weekly:'1週間',
						graph_monthly:'1ヶ月',
						graph_yearly: '1年',
						graph_5min_average:'(5分平均)',
						graph_30min_average:'(30分平均)',
						graph_2hour_average:'(2時間平均)',
						graph_1day_average:'(1日平均)',
						graph_network:'ネットワークグラフ',
						graph_cpu:'CPUグラフ',
						graph_disk:'ディスクグラフ',
						graph_memory:'メモリグラフ',
						graph_network_name:'ネットワーク',
						graph_cpu_name:'CPU',
						graph_disk_name:'ディスク',
						graph_memory_name:'メモリ',
						graph_labelAveIncoming:'平均入力',
						graph_labelAveOutgoing:'平均出力',
						graph_labelMaxIncoming:'最大入力',
						graph_labelMaxOutgoing:'最大出力',
						graph_labelAveUsage:'平均利用量',
						graph_labelMaxUsage:'最大利用量',
						graph_time_hour:'時',
						graph_time_day:'日',
						graph_time_sunday:'日',
						graph_time_monday:'月',
						graph_time_tuesday:'火',
						graph_time_wednesday:'水',
						graph_time_thursday:'木',
						graph_time_friday:'金',
						graph_time_saturday:'土',
						graph_time_jan:'1月',
						graph_time_feb:'2月',
						graph_time_mar:'3月',
						graph_time_apr:'4月',
						graph_time_may:'5月',
						graph_time_jun:'6月',
						graph_time_jul:'7月',
						graph_time_aug:'8月',
						graph_time_sep:'9月',
						graph_time_oct:'10月',
						graph_time_nov:'11月',
						graph_time_dec:'12月',
						select_button_help: '  ローディングが完了してから選択してください。',
						the_week: '週目',
						the_year: '年 ',
					},
					statistics:{
						help:'  全体的なメール処理に関する統計を確認できます。',
						location_1depth:'統計',
						location_2depth:'統計レポート',
						tab_all_help:'  全体的なメール処理に関する統計を確認できます。',
						tab_all:'すべて',
						tab_all_total:'すべて',
						tab_all_count:'件',
						tab_all_select_all_domain:'すべてのドメイン',
						tab_all_period_week:'7日間',
						tab_all_period_month:'30日間',
						tab_all_period_custom:'期間指定',
						tab_all_graph_title:'グラフ表示',
						tab_all_list_date:'日時',
						tab_all_list_mail_status:'メール ステータス',
						tab_ali_list_filter:'セキュリティ処理',
						tab_all_list_th_mail_status_send:'送信',
						tab_all_list_th_mail_status_recv:'受信',
						tab_all_list_th_mail_status_rs:'内部',
						tab_all_list_th_mail_status_relay:'リレー',
						tab_all_list_th_mail_status_mirror:'ミラー',
						tab_all_list_th_mail_status_total:'合計',
						tab_all_list_th_filter_spam:'迷惑メール',
						tab_all_list_th_filter_virus:'マルウェア',
						tab_all_list_th_filter_cdr:'CDR',
						tab_all_list_th_normal_send:'送信',
						tab_all_list_th_normal_recv:'受信',
						tab_all_list_th_normal_rs:'内部',
						tab_all_list_th_normal_relay:'リレー',
						tab_all_list_th_normal_mirror:'ミラー',
						tab_all_list_th_status_sendErr:'送信者不明',
						tab_all_list_th_status_recvErr:'受信者不明',
						tab_all_list_th_status_relayErr:'リレー拒否',
						tab_all_list_th_status_deliveryErr:'配送失敗',
						tab_all_list_th_spam_send:'送信',
						tab_all_list_th_spam_recv:'受信',
						tab_all_list_th_virus_send:'送信',
						tab_all_list_th_virus_recv:'受信',
						tab_all_list_th_cdr_send:'送信',
						tab_all_list_th_cdr_recv:'受信',
						tab_all_sender_top5:'送信者 TOP5',
						tab_all_sender_no:'No.',
						tab_all_sender_title:'送信者',
						tab_all_sender_count:'件数',
						tab_all_recver_top5:'受信者 TOP5',
						tab_all_recver_no:'No.',
						tab_all_recver_title:'受信者',
						tab_all_recver_count:'件数',
						tab_all_sender_domain_top5:'送信者ドメインTOP5',
						tab_all_sender_domain_no:'No.',
						tab_all_sender_domain_title:'ドメイン',
						tab_all_sender_domain_count:'件数',
						tab_all_recver_domain_top5:'受信者ドメインTOP5',
						tab_all_recver_domain_no:'No.',
						tab_all_recver_domain_title:'ドメイン',
						tab_all_recver_domain_count:'件数',
						tab_all_sender_country_top5:'送信国TOP5',
						tab_all_sender_country_no:'No.',
						tab_all_sender_country_title:'国名',
						tab_all_sender_country_count:'件数',
						tab_all_graph_send:'送信',
						tab_all_graph_recv:'受信',
						tab_all_graph_rs:'内部',
						tab_all_graph_relay:'リレー',
						tab_all_graph_mirror:'ミラー',
						tab_all_graph_spam:'迷惑メール',
						tab_all_graph_virus:'マルウェア',
						tab_all_graph_cdr:'CDR',

						tab_spam_help:'  迷惑メールの統計を確認できます。',
						tab_spam:'迷惑メール',

						tab_spam_total:'すべて',
						tab_spam_count:'件',
						tab_spam_select_all_domain:'すべてのドメイン',
						tab_spam_period_week:'7日間',
						tab_spam_period_month:'30日間',
						tab_spam_period_custom:'期間指定',
						tab_spam_graph_title:'グラフ表示',
						tab_spam_filter_all:'すべて',
						tab_spam_filter_send:'送信',
						tab_spam_filter_recv:'受信',
						tab_spam_filter_rs:'内部',
						tab_spam_filter_relay:'リレー',
						tab_spam_list_date:'日時',
						tab_spam_list_sdr:'送信者ドメインエラー',
						tab_spam_list_rdr:'受信者ドメインエラー',
						tab_spam_list_hdr:'HELOドメインエラー',
						tab_spam_list_spf:'SPF',
						tab_spam_list_rbl:'RBL',
						tab_spam_list_send_block:'送信者なし',
						tab_spam_list_recv_block:'受信者なし',
						tab_spam_list_msg_size:'メッセージサイズ制限',
						tab_spam_list_limit_server:'経路上のサーバー制限',
						tab_spam_list_pattern_filter:'パターンフィルター',
						tab_spam_list_content_filter:'コンテンツフィルター',
						tab_spam_list_limit_recv:'受信者数制限',
						tab_spam_list_exception:'例外処理',
						tab_spam_list_reject: '拒否',
						tab_spam_country_top5:'送信国 TOP5',
						tab_spam_country_no:'No.',
						tab_spam_country_title:'国',
						tab_spam_country_count:'件数',
						tab_spam_type_top5:'パターンTOP5',
						tab_spam_type_no:'No.',
						tab_spam_type_title:'パターン',
						tab_spam_type_count:'件数',
						tab_spam_filter_top5:'フィルター TOP5',
						tab_spam_filter_no:'No.',
						tab_spam_filter_title:'フィルタ名',
						tab_spam_filter_count:'件数',
						tab_spam_ip_top5:'IP 送信元IPTOP5',
						tab_spam_ip_no:'No.',
						tab_spam_ip_title:'IP',
						tab_spam_ip_count:'件数',
						tab_spam_graph_send:'送信',
						tab_spam_graph_recv:'受信',
						tab_spam_graph_block_policy:'ブロックポリシー',
						tab_spam_graph_smtp_block:'SMTPブロック',
						tab_spam_graph_connect_block:'アクセスブロック',
						tab_spam_graph_sdr:'送信者ドメインエラー',
						tab_spam_graph_rdr:'受信者ドメインエラー',
						tab_spam_graph_hdr:'HELOドメインエラー',
						tab_spam_graph_spf:'SPF',
						tab_spam_graph_rbl:'RBL',
						tab_spam_graph_send_block:'送信者なし',
						tab_spam_graph_recv_block:'受信者なし',
						tab_spam_graph_msg_size:'メッセージサイズ制限',
						tab_spam_graph_limit_server:'経路上のサーバー制限',
						tab_spam_graph_pattern_filter:'パターンフィルタ',
						tab_spam_graph_content_filter:'コンテンツフィルタ',
						tab_spam_graph_limit_recv:'受信者数の制限',
						tab_spam_graph_exception:'例外処理',
						tab_spam_graph_tag: 'タギング',

						tab_virus_help:'  マルウェアメールの統計を確認できます。',
						tab_virus:'マルウェア',
						tab_virus_total:'すべて',
						tab_virus_count:'件',
						tab_virus_select_all_domain:'すべてのドメイン',
						tab_virus_period_week:'7日間',
						tab_virus_period_month:'30日間',
						tab_virus_period_custom:'期間指定',
						tab_virus_graph_title:'グラフ表示',
						tab_virus_list_date:'日時',
						tab_virus_list_send:'送信',
						tab_virus_list_recv:'受信',
						tab_virus_list_rs:'内部',
						tab_virus_list_relay:'リレー',
						tab_virus_list_total:'合計',
						tab_virus_sender_top5:'送信者 TOP5',
						tab_virus_sender_no:'No.',
						tab_virus_sender_title:'送信者',
						tab_virus_sender_count:'件数',
						tab_virus_recver_top5:'受信者 TOP5',
						tab_virus_recver_no:'No.',
						tab_virus_recver_title:'受信者',
						tab_virus_recver_count:'件数',
						tab_virus_malignity_top5:'マルウェア TOP5',
						tab_virus_malignity_no:'No.',
						tab_virus_malignity_title:'悪性コード名',
						tab_virus_malignity_count:'件数',
						tab_virus_type_top5:'種類 TOP5',
						tab_virus_type_no:'No.',
						tab_virus_type_title:'種類',
						tab_virus_type_count:'件数',
						tab_virus_graph_send:'送信',
						tab_virus_graph_recv:'受信',
						tab_virus_graph_total:'合計',

						tab_cdr_help:'  CDRの統計を確認できます。',
						tab_cdr:'CDR',
						tab_cdr_total:'すべて',
						tab_cdr_count:'件',
						tab_cdr_select_all_domain:'すべてのドメイン',
						tab_cdr_period_week:'7日間',
						tab_cdr_period_month:'30日間',
						tab_cdr_period_custom:'期間指定',
						tab_cdr_graph_title:'グラフ表示',
						tab_cdr_list_date:'日時',
						tab_cdr_list_send:'送信',
						tab_cdr_list_recv:'受信',
						tab_cdr_list_count:'件数',
						tab_cdr_list_domain:'ドメイン',
						tab_cdr_list_size:'サイズ',
						tab_cdr_sender_top5:'送信者 TOP5',
						tab_cdr_sender_no:'No.',
						tab_cdr_sender_title:'送信者',
						tab_cdr_sender_count:'件数',
						tab_cdr_recver_top5:'受信者 TOP5',
						tab_cdr_recver_no:'No.',
						tab_cdr_recver_title:'受信者',
						tab_cdr_recver_count:'件数',
						tab_cdr_graph_send:'送信',
						tab_cdr_graph_recv:'受信',

						tab_normal_help:'  正常と判断されたメールの統計を確認できます。',
						tab_normal:'正常',
						tab_normal_total:'すべて',
						tab_normal_count:'件',
						tab_normal_select_all_domain:'すべてのドメイン',
						tab_normal_period_week:'7日間',
						tab_normal_period_month:'30日間',
						tab_normal_period_custom:'期間指定',
						tab_normal_graph_title:'グラフ表示',
						tab_normal_list_date:'日時',
						tab_normal_list_send:'送信',
						tab_normal_list_recv:'受信',
						tab_normal_list_rs:'内部',
						tab_normal_list_relay:'リレー',
						tab_normal_list_mirror:'ミラー',
						tab_normal_sender_top5:'送信者 TOP5',
						tab_normal_sender_no:'No.',
						tab_normal_sender_title:'送信者',
						tab_normal_sender_count:'件数',
						tab_normal_recver_top5:'受信者 TOP5',
						tab_normal_recver_no:'No.',
						tab_normal_recver_title:'受信者',
						tab_normal_recver_count:'件数',
						tab_normal_sender_domain_top5:'送信者ドメイン TOP5',
						tab_normal_sender_domain_no:'No.',
						tab_normal_sender_domain_title:'ドメイン',
						tab_normal_sender_domain_count:'件数',
						tab_normal_recver_domain_top5:'受信者のドメイン TOP5',
						tab_normal_recver_domain_no:'No.',
						tab_normal_recver_domain_title:'ドメイン',
						tab_normal_recver_domain_count:'件数',
						tab_normal_sender_country_top5:'送信国 TOP5',
						tab_normal_sender_country_no:'No.',
						tab_normal_sender_country_title:'国名',
						tab_normal_sender_country_count:'件数',
						tab_normal_graph_send:'送信',
						tab_normal_graph_recv:'受信',
						tab_normal_graph_rs:'内部',
						tab_normal_graph_relay:'リレー',
						tab_normal_graph_mirror:'ミラー',

						tab_final_help:'  メール配送に失敗した統計を確認することができます。',
						tab_final:'メール配送',
						tab_final_total:'すべて',
						tab_final_count:'件',
						tab_final_select_all_domain:'すべてのドメイン',
						tab_final_period_week:'7日間',
						tab_final_period_month:'30日間',
						tab_final_period_custom:'期間指定',
						tab_final_graph_title:'グラフ表示',
						tab_final_list_date:'日時',
						tab_final_list_pass:'成功',
						tab_final_list_reject:'失敗',
						tab_final_graph_pass:'成功',
						tab_final_graph_reject:'失敗',
						tab_final_graph_total:'合計',

						tab_rank_help: '  送信者、受信者、送信者ドメイン、受信者ドメイン、送信国に関するTOP5統計を表示します。',
						tab_rank: 'ランキング',

						tab_tagging_help: '  メールを分類するためのタグ処理に関する統計を確認できます。',
					},
					domain:{
						help:'  メールドメインの情報の確認と設定ができます。',
						location_1depth:'システム設定',
						location_2depth:'ドメイン設定',
						total:'すべて',
						count:'件',
						search_placeholder:'ドメイン名を入力してください。',
						list_domain_name:'ドメイン名',
						list_default_domain:'デフォルト',
						list_internal_external:'内部・外部',
						list_id_case_sensitivity: 'IDは大文字小文字区別',
						list_create_time:'更新時間',
						list_edit: '編集・削除',
						list_item_isLocal_true:'内部',
						list_item_isLocal_false:'外部',
						list_item_isCaseIgnore_true:'区別する',
						list_item_isCaseIgnore_false:'区別しない',
						list_item_mirror: 'ミラーリング',
						list_item_mirror_usage: 'ミラーリングの種類',
						list_item_mirror_port: 'ポート',
						list_item_smart_host_setting: '受信メールサーバー',
						list_item_smart_host_usage: 'メールサーバーの使用',
						list_item_smart_host: 'メールサーバー',
						list_item_smart_host_server: 'メールサーバーの情報',
						list_item_smart_host_port: 'メールサーバーポート',
						list_item_smart_host_type: 'メールサーバーの種類',
						list_item_smart_host_ssl: 'メールサーバーSSL',
						list_item_smart_host_type_smtp: 'SMTP サービス',
						list_item_smart_host_type_pop3: 'POP サービス',
						list_item_smart_host_type_imap4: 'IMAP サービス',
						list_item_server_help: '(IPまたはドメイン)',
						list_item_edit:'変更',
						list_item_del:'削除',
						list_item_backup: 'バックアップ',
						btn_add:'追加',
						btn_submit:'適用',
						btn_close:'閉じる',
						btn_yes:'はい',
						btn_no:'いいえ',
						label_switch_on:'ON',
						label_switch_off:'OFF',
						label_switch_internal:'内部',
						label_switch_external:'外部',
						modal_title:'ドメインの追加',
						modal_list_domain_name:'ドメイン名',
						modal_list_internal_external:'内部・外部ドメイン',
						modal_list_id_case_sensitivity: 'IDは大文字小文字区別',
						modal_edit_title:'ドメイン変更',
						modal_edit_list_domain_name:'ドメイン名',
						modal_edit_list_default_domain:'デフォルトドメイン',
						modal_edit_list_internal_external:'内部・外部ドメイン',
						modal_edit_list_id_case_sensitivity: 'IDは大文字小文字区別',
						modal_list_mirror_setting: 'メールミラーリング',
						modal_list_mirror_server: 'サーバー情報',
						modal_list_mirror_port: 'サーバーポート',
						modal_list_mirror_ssl: 'SSL',
						modal_list_smarthost_server: 'サーバー情報',
						modal_list_smarthost_port: 'サーバーポート',
						modal_list_smarthost_ssl: 'SSL',
						modal_list_smarthost_on: '指定',
						modal_list_smarthost_off: 'MX レコード',
						modal_del_title:'ドメイン削除',
						modal_del_msg1:'ドメイン名: [',
						modal_del_msg2: ']を削除しますか?',
					},
					autoDelete:{
						help:'  システムリソースを自動的に確保するため、ログファイルやオリジナルメール等の処理済のデータを自動で削除できます。',
						location_1depth:'システム設定',
						location_2depth:'自動削除設定',
						usage:'自動削除機能利用',
						label_switch_on:'ON',
						label_switch_off:'OFF',
						log_file:'ログファイル',
						log_file_help1: '',
						log_file_help2:'  日前のログファイルを削除',
						save_mail:'オリジナルメール',
						save_mail_help1: '',
						save_mail_help2:'  日前のオリジナルメールを削除',
						mail_list:'メールリスト',
						mail_list_help1: '',
						mail_list_help2:'  日前のメールリストを削除',
						common_help:'0 に設定すると削除されません。',
						btn_submit:'適用',
						loding_msg1:'適用中',
						loding_msg2:'設定を保存しています。',
						result:'結果',
						result_msg:'設定が変更されました。',
						result_msg1:'変更した設定を反映させるためには',
						result_msg2:'を再起動してください。',
						result_location:'メニュー: ホーム > 監視 > サービス監視',
						seg_cron_serivce:'SEG CRON サービス',
						error: 'エラー',
						error_msg:'設定変更ができませんでした。'
					},
					smtp:{
						help:'  STMPに関する設定ができます。',
						location_1depth:'システム設定',
						location_2depth:'SMTP設定',
						log_setting:'SMTPログ設定',
						log_path:'ログ保存フォルダ',
						log_level:'ログレベル',
						log_level_error:'エラー',
						log_level_info:'情報',
						log_level_debug:'デバッグ',
						dns_socket:'DNSとソケット',
						dns_server:'DNSサーバーIP',
						port_number:'SMTPポート番号',
						port:'ポート',
						ipv4:'IPv4利用',
						ipv4_label_switch_on:'ON',
						ipv4_label_switch_off:'OFF',
						ipv6:'IPv6利用',
						ipv6_label_switch_on:'ON',
						ipv6_label_switch_off:'OFF',
						connection:'接続タイムアウト',
						second:'秒',
						command:'コマンドタイムアウト',
						receive_mail:'メール受信タイムアウト',
						smtp_msg_queue:'SMTPメッセージキュー',
						queue_empty_period:'キューリセット間隔',
						queue_path:'キューフォルダー',
						queue_count:'キューの数',
						count:'個',
						return_received_mail:'受信メールのリターン',
						hour_later:'時間後',
						return_sent_mail:'送信メールのリターン',
						delete_returned_mail:'リターンメール削除',
						queue_connection:'接続タイムアウト',
						queue_command:'コマンドタイムアウト',
						queue_receive_mail:'メール受信タイムアウト',
						smtp_management:'SMTPポリシー',
						use_smtp_auth:'SMTP認証必要',
						use_smtp_auth_label_switch_on:'ON',
						use_smtp_auth_label_switch_off:'OFF',
						allow_relay_local_machine:'ローカルからリレーを許可',
						allow_relay_local_machine_label_switch_on:'ON',
						allow_relay_local_machine_label_switch_off:'OFF',
						allow_relay_smtp_authed:'SMTP認証ユーザーからリレーを許可',
						allow_relay_smtp_authed_label_switch_on:'ON',
						allow_relay_smtp_authed_label_switch_off:'OFF',
						deny_external_mail_address:'外部メールアドレスからリレーを拒否',
						deny_external_mail_address_label_switch_on:'ON',
						deny_external_mail_address_label_switch_off:'OFF',
						use_ssl:'SSL利用',
						use_ssl_label_switch_on:'ON',
						use_ssl_label_switch_off:'OFF',
						ssl_port_number:'SSLポート番号',
						use_tls:'TLS利用',
						use_tls_label_switch_on:'ON',
						use_tls_label_switch_off:'OFF',
						use_submission_port:'Submissionポート利用',
						use_submission_port_label_switch_on:'ON',
						use_submission_port_label_switch_off:'OFF',
						submission_port_number:'Submissionポート番号',
						loding_msg1:'適用中',
						loding_msg2:'設定を保存しています。',
						result:'結果',
						result_msg:'設定が変更されました。',
						result_msg1:'変更した設定を反映させるためには',
						result_msg2:'を再起動してください。',
						result_location:'メニュー: ホーム > 監視 > サービス監視',
						seg_smtp_serivce:'SEG SMTP サービス',
						error: 'エラー',
						error_msg:'設定変更ができませんでした。',
						btn_submit:'適用'
					},
					config:{
						help:'  SHIELDEX Email Gatewayの設定ファイルの確認および修正ができます。',
						location_1depth:'システム設定',
						location_2depth:'CONFIG設定',
						btn_submit:'適用',
						approval_help:'  認証設定ができます。',
						auth_help:'  パスワードポリシーの設定ができます。',
						core_help:'  メインポリシーの設定ができます。',
						cron_help:'  予約済タスクの設定ができます。',
						dbcp_help:'  データベースの設定ができます。',
						seg_help:'  SHIELDEX Email Gatewayの設定ができます。',
						smtp_help:'  SMTPサーバーの設定ができます。',
						sysmon_help:'  システム監視の設定ができます。',
						process_result:'処理結果',
						process_result_msg:'変更された内容がありません。',
						result:'結果',
						result_msg:'適用されました。',
						seg_smtp_serivce:'SEG SMTP',
						seg_cron_serivce:'SEG CRON',
						serivce:'サービス',
						and:'を',
						result_msg2:'上記のサービスを再起動してください。',
						result_location:'メニュー: ホーム > 監視 > サービス監視'
					},
					notices:{
						help:'  システムから管理者へ通知するメッセージを設定できます。',
						location_1depth:'システム設定',
						location_2depth:'通知設定',
						btn_submit:'適用',
						btn_template:'通知メールのプレビュー',
						btn_add:'追加',
						btn_close:'閉じる',
						btn_send: '送信する',
						error: 'エラー',
						error_msg:'メールアドレスの形式ではありません。',
						error_msg2:'既にメールアドレスが存在します。',
						modal_template:'テンプレートのプレビュー',
						okay:'OK',
						okay_msg:'変更は適用されました。',
						interval_type:'実行間隔',
						interval_now:'1回',
						interval_hourly:'毎時',
						interval_daily:'毎日',
						url:'システムチェックURL',

						tab_system:'システム通知',
						tab_system_help:'  システムのステータスの通知レベルを設定できます。レベル設定の推奨は「警告:50％、危険:80％」です。',
						tab_system_usage:'システム通知',
						tab_system_usage_label_switch_on:'ON',
						tab_system_usage_label_switch_off:'OFF',
						tab_system_refresh_time:'更新期間',
						tab_system_refresh_time_min:'分',
						tab_system_refresh_time_hour:'時',
						tab_system_refresh_time_day:'日',
						tab_system_object:'項目',
						tab_system_threshold:'レベル設定',
						tab_system_sent_time:'送信トリガー',
						tab_system_cpu:'CPU',
						tab_system_cpu_warning:'警告: ',
						tab_system_cpu_danger:'危険: ',
						tab_system_cpu_warning_chk:'警告',
						tab_system_cpu_danger_chk:'危険',
						tab_system_memory:'メモリー',
						tab_system_memory_warning:'警告: ',
						tab_system_memory_danger:'危険: ',
						tab_system_memory_warning_chk:'警告',
						tab_system_memory_danger_chk:'危険',
						tab_system_disk:'ディスク',
						tab_system_disk_warning:'警告: ',
						tab_system_disk_danger:'危険: ',
						tab_system_disk_warning_chk:'警告',
						tab_system_disk_danger_chk:'危険',
						tab_system_network:'ネットワーク',
						tab_system_network_warning:'警告: ',
						tab_system_network_danger:'危険: ',
						tab_system_network_warning_chk:'警告',
						tab_system_network_danger_chk:'危険',
						tab_system_sender_mail:'送信元メールアドレス',
						tab_system_mail_title:'メールの件名',
						tab_system_mail_title_placeholder:'システムからの通知メールです。',
						tab_system_safe_mail_title:'通常のメールの件名',
						tab_system_safe_mail_title_placeholder:'システムの正常な通知メールです。',
						tab_system_noti_email:'受信者メールアドレス',
						tab_system_template:'テンプレート',

						tab_spam:'スパム通知',
						tab_spam_help:'  ユーザーに対してメールレポートを送信できます。',
						tab_spam_usage:'ユーザー個別のスパム通知メール',
						tab_spam_usage_label_switch_on:'ON',
						tab_spam_usage_label_switch_off:'OFF',
						tab_spam_sent_time:'送信間隔',
						tab_spam_sent_time_1hour:'1時間',
						tab_spam_sent_time_2hour:'2時間',
						tab_spam_sent_time_3hour:'3時間',
						tab_spam_sent_time_4hour:'4時間',
						tab_spam_sent_time_6hour:'6時間',
						tab_spam_sent_time_8hour:'8時間',
						tab_spam_sent_time_12hour:'12時間',
						tab_spam_sent_time_24hour:'24時間',
						tab_spam_sent_time_help_msg1:'設定の',
						tab_spam_sent_time_help_msg2:'時間毎に送信されます。',
						tab_spam_mail_title:'通知メールの件名',
						tab_spam_mail_title_placeholder:'スパムメール通知',
						tab_spam_sender_mail:'送信元メールアドレス',
						tab_spam_sender_user_mail: '個別にメールを送信する',
						tab_spam_sender_user_mail_placeholder: '個別メール受信者メールアドレス入力',
						tab_spam_sender_user_mail_once: '個別',
						tab_spam_sender_user_mail_popup_title: 'メール送信',
						tab_spam_sender_user_mail_popup_help: 'すべてのメールが送信されます。 送信しますか?',
						tab_spam_template:'テンプレート',
						tab_spam_send_user_noti: '入力したメールアドレスに送信されました。',
						tab_spam_send_user_noti_err: '送信失敗',

						tab_virus:'マルウェア通知',
						tab_virus_help:'  ウイルスが検知された場合、通知メッセージを送信できます。通知レベルや送信周期などを設定可能です。',
						tab_virus_usage:'マルウェア通知',
						tab_virus_usage_label_switch_on:'ON',
						tab_virus_usage_label_switch_off:'OFF',
						tab_virus_threshold:'閾値設定',
						tab_virus_threshold_help:'件以上のウイルス検知で通知',
						tab_virus_sent_type:'送信タイミング',
						tab_virus_sent_once:'検知ごとに(1回)',
						tab_virus_sent_roop:'時間ごとに(繰り返す)',
						tab_virus_content_help:'発生時に1度だけ送信されます。',
						tab_virus_sender_mail:'送信者メールアドレス',
						tab_virus_mail_title:'メールの件名',
						tab_virus_mail_title_placeholder:'マルウェア通知メール',
						tab_virus_noti_email:'受信者メールアドレス',
						tab_virus_template:'テンプレート',

						tab_mail:'メール監視通知',
						tab_mail_help:'  メールの送受信状況を監視し、設定した条件になると通知メッセージを送信できます。',
						tab_mail_send_usage:'メール送信状況監視の通知',
						tab_mail_send_usage_label_switch_on:'ON',
						tab_mail_send_usage_label_switch_off:'OFF',
						tab_mail_send_threshold:'通知閾値(送信件数)',
						tab_mail_send_threshold_help:'件以上で通知',
						tab_mail_recv_usage:'メール受信状況監視の通知',
						tab_mail_recv_usage_label_switch_on:'ON',
						tab_mail_recv_usage_label_switch_off:'OFF',
						tab_mail_recv_threshold:'通知閾値(受信件数)',
						tab_mail_recv_threshold_help:'件以上で通知',
						tab_mail_rs_usage:'内部メール監視の通知',
						tab_mail_rs_usage_label_switch_on:'ON',
						tab_mail_rs_usage_label_switch_off:'OFF',
						tab_mail_rs_threshold:'通知閾値(内部メール件数)',
						tab_mail_rs_threshold_help:'件以上で通知',
						tab_mail_relay_usage:'メールリレー監視の通知',
						tab_mail_relay_usage_label_switch_on:'ON',
						tab_mail_relay_usage_label_switch_off:'OFF',
						tab_mail_relay_threshold:'通知閾値(リレー件数)',
						tab_mail_relay_threshold_help:'件以上で通知',
						tab_mail_content_help:'発生時に1度だけ送信されます。',
						tab_mail_title:'メールの件名',
						tab_mail_title_placeholder:'メール通知',
						tab_mail_sender_mail:'送信者メールアドレス',
						tab_mail_mail_title:'メールの件名',
						tab_mail_noti_email:'受信者メールアドレス',
						tab_mail_template:'テンプレート',

						tab_queue:'キュー監視通知',
						tab_queue_help:'  キューの利用状況を監視し、設定した条件になると通知メッセージを送信できます。',
						tab_queue_usage:'キュー状況監視の通知',
						tab_queue_usage_label_switch_on:'ON',
						tab_queue_usage_label_switch_off:'OFF',
						tab_queue_threshold:'通知閾値(キューの数)',
						tab_queue_threshold_help:'個以上で通知',
						tab_queue_sent_type:'送信タイミング',
						tab_queue_sent_once:'発生時(1回のみ)',
						tab_queue_sent_roop:'繰り返し送信(毎時)',
						tab_queue_content_help:'発生時に1度だけ送信されます。',
						tab_queue_sender_mail:'送信者メールアドレス',
						tab_queue_mail_title:'メールの件名',
						tab_queue_mail_title_placeholder:'キュー状況監視通知',
						tab_queue_safe_mail_title:'通常のメールの件名',
						tab_queue_safe_mail_title_placeholder:'キューの安全な通知メール',
						tab_queue_noti_email:'受信者メールアドレス',
						tab_queue_template:'テンプレート',

						tab_report:'レポート',
						tab_report_help:'  定期的に指定された項目に対するレポートを送信できます。', //수정필요
						tab_report_usage:'レポート送信',
						tab_report_usage_label_switch_on:'ON',
						tab_report_usage_label_switch_off:'OFF',
						tab_report_period:'対象期間',
						tab_report_period_day:'毎日',
						tab_report_period_week:'週間',
						tab_report_period_month:'月間',
						tab_report_period_select:'期間指定',
						tab_report_period_dateFrom:'開始日',
						tab_report_period_dateTo:'終了日',
						tab_report_start_noti:'送信日',
						tab_report_start_noti_today:'今日',
						tab_report_start_noti_custom:'指定日',
						tab_report_sent_object:'レポート対象',
						tab_report_sent_object_all:'すべて',
						tab_report_sent_object_normal:'正常',
						tab_report_sent_object_spam:'迷惑メール',
						tab_report_sent_object_virus:'マルウェア',
						tab_report_sent_object_send:'送信',
						tab_report_sent_object_recv:'受信',
						tab_report_sent_object_cdr:'CDR',
						tab_report_content_help:'対象期間が30日の場合、レポート送信時点から前30日間の情報が送信されます。',
						tab_report_sender_mail:'送信者メールアドレス',
						tab_report_mail_title:'メールの件名',
						tab_report_mail_title_placeholder:'レポート通知メール',
						tab_report_noti_email:'受信者メールアドレス',
						tab_report_template:'テンプレート',

						tab_service: 'サービス監視通知',
						tab_service_usage: 'サービス監視通知',
						tab_service_content_help: '  サービス監視通知を設定することができます。',
						tab_service_sender_mail: '送信者メールアドレス',
						tab_service_mail_title: 'メールの件名',
						tab_service_mail_title_placeholder: 'サービス通知メール',
						tab_service_noti_email: '受信者メールアドレス',
						tab_service_template: 'テンプレート',

						tab_vaccine: 'ワクチン·アップデート',
						tab_vaccine_help: '  ワクチンパターンがアップデートされると通知メールを送信します。',

						tab_error: 'エラー通知',
						tab_error_help: '  機能エラーが発生した場合に,通知メールが送信されます。'
					},
					
					admin:{
						help:'  管理者アカウントに対するアクセス制限、言語、パスワード等を設定できます。',
						location_1depth:'システム設定',
						location_2depth:'管理者設定',
						btn_add:'追加',
						btn_submit:'適用',
						btn_update:'修正',
						btn_modify:'変更',
						btn_delete:'削除',
						btn_modify_title:'変更', 
						btn_delete_title:'削除', 
						btn_close:'閉じる',

						tab_access_setting:'管理者アクセス制限',
						tab_access_setting_help:'  管理者アカウントのログインやアクセス制限等が設定できます。',
						tab_access_setting_total:'すべて',
						tab_access_setting_count:'件',
						tab_access_setting_usage:'管理者アクセス制限',
						tab_access_setting_usage_label_switch_on:'ON',
						tab_access_setting_usage_label_switch_off:'OFF',
						tab_access_setting_header_title:'ポリシー',
						tab_access_setting_header_allow:'許可',
						tab_access_setting_header_deny:'ブロック',
						tab_access_setting_header_add:'ポリシー追加',
						tab_access_setting_list_ip:'IP',
						tab_access_setting_list_ip_type:'IP形式',
						tab_access_setting_list_desc:'説明',
						tab_access_setting_list_time:'時間',
						tab_access_setting_list_update:'編集',
						tab_access_setting_add_modal_title:'管理者アクセスポリシー追加',
						tab_access_setting_add_modal_ip:'IP',
						tab_access_setting_add_modal_ip_title:'IP', 
						tab_access_setting_add_modal_policy:'ポリシー',
						tab_access_setting_add_modal_allow:'許可',
						tab_access_setting_add_modal_deny:'ブロック',
						tab_access_setting_add_modal_ip_type:'IP形式',
						tab_access_setting_add_modal_desc:'説明',
						tab_access_setting_add_modal_desc_title:'説明', 
						tab_access_setting_update_title:'管理者アクセス設定編集',
						tab_access_setting_update_modal_ip:'IP',
						tab_access_setting_update_modal_policy:'ポリシー',
						tab_access_setting_update_modal_allow:'許可',
						tab_access_setting_update_modal_deny:'ブロック',
						tab_access_setting_update_modal_ip_type:'IP形式',
						tab_access_setting_update_modal_desc:'説明',
						tab_access_type_ip:'IP',
						tab_access_type_netmask:'ネットマスク',
						tab_access_type_wildcard:'ワイルドカード',
						tab_access_setting_allow_help:'許可リストに設定がなければすべてブロックされます。',
						tab_access_setting_deny_help:'ブロックリストに設定がなければすべて許可されます。',

						tab_language_setting:'言語設定',
						tab_language_setting_help:'  利用する言語を設定できます。',
						tab_language_setting_title:'言語',
						tab_language_setting_ko:'韓国語',
						tab_language_setting_us:'英語',
						tab_language_setting_jp:'日本語',

						tab_admin_addDel:'管理者追加・削除',
						tab_admin_addDel_help:'  ドメイン管理者のアカウントを管理できます。',
						tab_admin_addDel_total:'すべて',
						tab_admin_addDel_count:'件',
						tab_admin_addDel_search_all:'すべて',
						tab_admin_addDel_search_id:'管理者ID',
						tab_admin_addDel_search_domain:'ドメイン名',
						tab_admin_addDel_list_domain_name:'ドメイン名',
						tab_admin_addDel_list_admin:'管理者',
						tab_admin_addDel_list_lang: '基本言語',
						tab_admin_addDel_list_time:'作成日',
						tab_admin_addDel_list_etc:'編集・削除',
						tab_admin_addDel_update_modal_title:'管理者変更',
						tab_admin_addDel_update_modal_old_pwd:'現在のパスワード',
						tab_admin_addDel_update_modal_new_pwd:'新しいパスワード',
						tab_admin_addDel_update_modal_new_pwd_confirm:'新しいパスワードの確認',
						tab_admin_addDel_add_modal_title:'管理者追加',
						tab_admin_addDel_add_modal_domain_name:'ドメイン名',
						tab_admin_addDel_add_modal_id:'管理者ID',
						tab_admin_addDel_add_modal_new_pwd:'パスワード',
						tab_admin_addDel_add_modal_new_pwd_confirm:'パスワードの確認',
						tab_admin_addDel_del_modal_title: '管理者を削除します',
						tab_admin_addDel_del_modal_help: 'このアカウントを削除しますか',
						tab_admin_addDel_id_chk_help:'このIDはすでに利用中です。',
						tab_admin_addDel_list_right: '権限',
						tab_admin_addDel_domain_admin: 'ドメイン管理者',
						tab_admin_addDel_system_admin: 'システム管理者',
						tab_admin_addDel_domain_list_none: 'ドメインなし',
						tab_admin_addDel_modify_passwd: 'パスワード変更',
						tab_admin_addDel_modify_right: '権限変更',

						tab_password_manager:'パスワード管理',
						tab_password_manager_help:'  登録するパスワードの制限ルールを設定できます。',
						tab_password_manager_length_min:'パスワード長さ制限',
						tab_password_manager_special_ch:'パスワードに必要な特殊文字の数',
						tab_password_manager_length_num:'パスワードに必要な数字の数',
						tab_password_manager_content_help:'上記の何れかも「0」に設定すると無制限になります。',
						tab_password_manager_result:'設定成功',
						tab_password_manager_result_help:'適用されました。',

						tab_password_setting:'パスワード変更',
						tab_password_setting_help:'  管理者アカウントのパスワードを変更できます。',
						tab_password_setting_old_pwd:'現在パスワード',
						tab_password_setting_old_pwd_title:'現在パスワード', 
						tab_password_setting_new_pwd:'新しいパスワード',
						tab_password_setting_new_pwd_title:'新しいパスワード', 
						tab_password_setting_new_pwd_confirm:'新しいパスワードの確認',
						tab_password_setting_new_pwd_confirm_title:'新しいパスワードの確認', 
						tab_password_setting_length_msg1:'パスワードの長さは最小',
						tab_password_setting_length_msg2:'文字です。',
						tab_password_setting_special_help:'特殊文字が含まれていません。',
						tab_password_setting_number_help:'数字が含まれていません。',
						tab_password_setting_pwd_chk_help:'パスワードが一致しました。',
						tab_password_setting_pwd_unchk_help:'パスワードが一致しません。',
						tab_password_setting_pwd_complate_help:'パスワードの変更に成功しました。'
					},
					
					user:{
						help:'  メールドメインに登録されているユーザーやグループ情報を管理できます。',
						location_1depth:'システム設定',
						location_2depth:'ユーザー設定',
						total:'すべて',
						count:'件',
						btn_add:'追加',
						btn_submit:'適用',
						btn_update:'更新',
						btn_modify:'変更',
						btn_delete:'削除',
						btn_modify_title:'変更', 
						btn_delete_title:'削除', 
						btn_close:'閉じる',
						btn_add_group:'グループ追加',
						btn_add_user:'ユーザー登録',
						add_user_modify: 'ユーザー情報の追加',
						edit_user_modify:'ユーザー情報の変更',
						list_name:'名前',
						list_group_name:'グループ名',
						list_id: 'ID',
						list_register_date:'登録日',
						list_modify:'変更',
						organization:'組織',
						modal_add_user_inidividual:'個別登録',
						modal_add_user_bundle:'一括登録',
						modal_add_user_sample_down:'フォーマットダウンロード',
						modal_name:'名前',
						modal_group_name:'グループ名',
						modal_id: 'ID',
						modal_password:'パスワード',
						modal_password2: 'パスワードの確認',
						modal_register_date:'登録日',
						modal_last_modify_date:'最終変更日時',
						modal_group_manager:'グループ管理',
						modal_modify_group:'グループ名変更',
						modal_del_title:'ユーザー削除',
						modal_del_body:'削除してもよいですか?',
						default_group_name: '未分類'
							
					},
					equipment:{
						help:'  システムを構成するサーバーを登録・管理できます。',
						location_1depth:'システム設定',
						location_2depth:'サーバー管理',
						total:'すべて',
						count:'件',
						btn_add:'追加',
						btn_submit:'適用',
						btn_close:'閉じる',
						edit_title:'編集', 
						delete_title:'削除', 

						search_placeholder:'サーバー名を入力してください。',
						list_serial: '個別番号',
						list_default: 'マスター機器のステータス',
						list_token: '装備連結キー値',
						list_mngr_url: 'mngr url',
						list_seg_url: 'SEG URL',
						list_name:'ホスト名',
						list_ip:'IPアドレス',
						list_port:'ポート',
						list_edit:'編集・削除',

						add_modal_title:'サーバー追加',
						add_modal_name:'ホスト名',
						add_modal_ip:'IPアドレス',
						add_modal_port:'ポート',
						add_modal_master: 'マスター',
						add_modal_sub: 'サブ',

						update_modal_title: 'サーバーの更新',

						delete_modal_title: 'サーバーの削除',
						delete_modal_msg: 'サーバーを削除してよいですか?',
						overlap_msg: '個別番号は既に登録されています。 再度、試してください。',
						add_update_modal_help: '  サーバー名は重複できません。'
					},
					
					license:{
						help:'  本製品とライセンス情報を確認可能です。MACアドレスはライセンス認証に利用されるため、MACアドレスを変更する場合販売店又は開発元へお問い合わせください。',
						location_1depth:'システム設定',
						location_2depth:'製品情報',
						btn_submit:'適用',

						list_company_name:'会社名',
						list_version:'製品バージョン',
						list_serial:'ライセンス一番号',
						list_validDate:'メンテナンス期間',
						list_maxValidDate:'有効期限', 
						list_mac:'MAC',
						list_ip:'IP',
						list_maxUser:'ユーザー数',
						list_limit_user:'無制限', 
						list_openSources:'オープンソース',
						list_copyright_info:'著作権情報',
						list_license_update:'ライセンス更新',
						list_period: '製品使用期限',
						list_default_lang: '製品基本言語',

						processing:'実行中',
						select_file: 'ファイルの選択',
						upload_file:'ファイルをアップロードしています。', 
						upload_file_select:'アップロードするファイルを選択してください。', 
						error: 'エラー', 
						result:'結果', 
						result_msg1:'アップロードされました。', 
						result_msg2:'アップロードに失敗しました。'

					},
					spamPolicy:{
						help:'  迷惑メールポリシーを設定できます。',
						location_1depth:'ポリシー管理',
						location_2depth:'迷惑メールポリシー',
						btn_add:'追加',
						btn_del:'削除',
						btn_close:'閉じる',
						btn_submit:'適用',

						etc_string: '他の ',
						tab_subject_list: '件名リスト',

						tab_common: '共通',
						tab_grey_listing: '接続制限',
						tab_rbl: 'RBL',
						tab_spf: 'SPF',
						tab_scam: 'Scam',
						tab_helo: 'HELOドメイン',
						tab_sender: '送信者',
						tab_recver: '受信者',
						tab_relay: 'リレー',
						tab_contents: 'メール内容',
						tab_common_help: '  スパムブロック共通情報を修正することができます。',
						tab_grey_listing_help: '  SMTP 接続に対する制御を行います。',
						tab_rbl_help: '  送信元IPに対するRBL(Realtime Black List)を照会します。',
						tab_spf_help: '  送信元IPに対する有効性を検証します。',
						tab_scam_help: '  送信者メールアドレスに対する有効性を検証します。',
						tab_helo_help: '  SMTP HELO 情報に対する有効性を検証します。',
						tab_sender_help: '  送信者ドメインと,メールアドレスに対する有効性を検証します。',
						tab_recver_help: '  受信者ドメインとメールアドレスに対する有効性を検証します。',
						tab_relay_help: '  メールサーバーが盗用されるのに対する検査をします。',
						tab_contents_help: '  メールの内容に対する確認を行います。',

						tab_exception:'例外',
						tab_exception_help:'  例外処理を行うメールを管理できます。',
						tab_exception_list_date:'登録日',
						tab_exception_list_all:'すべて',
						tab_exception_list_division:'ポリシー',
						tab_exception_list_rule_name:'ルール名',
						tab_exception_list_filter:'フィルタ',
						tab_exception_list_process:'処理方法',
						tab_exception_list_register:'登録者',
						tab_exception_list_range:'対象範囲',
						tab_exception_list_target_type: 'ターゲット タイプ',
						tab_exception_list_etc:'編集・削除',
						tab_exception_add_modal_title:'例外ルールの追加',
						tab_exception_add_modal_rule_name:'ルール名',
						tab_exception_add_modal_bound: '対象範囲',
						tab_exception_add_modal_filter:'ポリシー',
						tab_exception_add_modal_filter_ip:'IP',
						tab_exception_add_modal_filter_sender:'送信者',
						tab_exception_add_modal_filter_recver:'受信者',
						tab_exception_add_modal_filter_domain:'ドメイン',
						tab_exception_add_modal_filter_email:'メール',
						tab_exception_add_modal_filter2_or:'を含む',
						tab_exception_add_modal_filter2_and:'と一致する',
						tab_exception_add_modal_filter2_start:'で始まる',
						tab_exception_add_modal_filter2_end:'で終わる',
						tab_exception_add_modal_ingore: '大小文字区分',
						tab_exception_add_modal_ingore_true: '大小文字区分',
						tab_exception_add_modal_ingore_false: '大小文字区分しない',
						tab_exception_add_modal_process:'処理方法',
						tab_exception_add_modal_process_label_switch_on:'許可',
						tab_exception_add_modal_process_label_switch_off:'ブロック',
						tab_exception_add_modal_register:'登録者',
						tab_exception_add_modal_range:'対象範囲',
						tab_exception_add_modal_add_range: '対象の追加',
						tab_exception_add_modal_range_label_switch_on:'すべて',
						tab_exception_add_modal_range_label_switch_off:'ユーザー',
						tab_exception_update_modal_title:'例外処理ルールの編集',
						tab_exception_update_modal_rule_name:'ルール名',
						tab_exception_update_modal_filter:'フィルタ',
						tab_exception_update_modal_filter_ip:'IP',
						tab_exception_update_modal_filter_domain:'ドメイン',
						tab_exception_update_modal_filter_email:'メール',
						tab_exception_update_modal_process:'処理方法',
						tab_exception_update_modal_process_label_switch_on:'許可',
						tab_exception_update_modal_process_label_switch_off:'ブロック',
						tab_exception_update_modal_register:'登録者',
						tab_exception_update_modal_range:'対象範囲',
						tab_exception_update_modal_range_label_switch_on:'すべて',
						tab_exception_update_modal_range_label_switch_off:'ユーザー',
						tab_exception_user_modal_title: 'ユーザーの選択',

						tab_block:'ブロックルール',
						tab_block_help:'  メールに対するブロックルールを設定できます。',
						tab_block_add_modal_title:'ブロックルール追加',
						tab_block_update_modal_title: 'ブロックルールの変更',

						tab_smtp:'SMTPレベルブロック',
						tab_smtp_help:'SMTPサーバーレベルでDNS(Domain Name System)、SPF(Sender Policy Framework)、RBL(Real-time Blocking List)などをチェックし、迷惑メールをチェックできます。',
						tab_smtp_default_setting:'基本ポリシー',
						tab_smtp_sender_domain:'送信者ドメインチェック',
						tab_smtp_sender_domain_label_switch_on:'ON',
						tab_smtp_sender_domain_label_switch_off:'OFF',
						tab_smtp_recver_domain:'受信者ドメインチェック',
						tab_smtp_recver_domain_label_switch_on:'ON',
						tab_smtp_recver_domain_label_switch_off:'OFF',
						tab_smtp_helo_domain:'HELOドメインチェック',
						tab_smtp_helo_domain_label_switch_on:'ON',
						tab_smtp_helo_domain_label_switch_off:'OFF',
						tab_smtp_domain:'ドメイン有効性チェック',
						tab_smtp_domain_label_switch_on:'ON',
						tab_smtp_domain_label_switch_off:'OFF',
						tab_smtp_spf:'SPFチェック',
						tab_smtp_spf_label_switch_on:'ON',
						tab_smtp_spf_label_switch_off:'OFF',
						tab_smtp_spf_not_set_reject: 'SPFルールを登録していないドメインをブロック',
						tab_smtp_rbl:'RBL',
						tab_smtp_rbl_label_switch_on:'ON',
						tab_smtp_rbl_label_switch_off:'OFF',
						tab_smtp_rbl_list_date:'日時',
						tab_smtp_rbl_list_site:'RBLサイト',
						tab_smtp_rbl_list_register:'登録者',
						tab_smtp_rbl_list_update_del:'編集・削除',
						tab_smtp_rbl_add_modal_title:'RBLサイト登録',
						tab_smtp_rbl_update_modal_title:'RBLサイト変更',
						tab_smtp_sender:'送信者ブロック',
						tab_smtp_sender_setting:'送信者ブロック',
						tab_smtp_sender_label_switch_on:'ON',
						tab_smtp_sender_label_switch_off:'OFF',
						tab_smtp_sender_list_date:'日時',
						tab_smtp_sender_list_sender:'送信者',
						tab_smtp_sender_list_register:'登録者',
						tab_smtp_sender_list_update_del:'編集・削除',
						tab_smtp_sender_list_email:'メールアドレス',
						tab_smtp_recver:'受信者ブロック',
						tab_smtp_recver_setting:'受信者ブロック',
						tab_smtp_recver_label_switch_on:'ON',
						tab_smtp_recver_label_switch_off:'OFF',
						tab_smtp_recver_list_date:'日時',
						tab_smtp_recver_list_recver:'受信者',
						tab_smtp_recver_list_register:'登録者',
						tab_smtp_recver_list_update_del:'編集・削除',
						tab_smtp_recver_list_email:'メールアドレス',
						tab_smtp_limit_recv:'受信者数の制限',
						tab_smtp_limit_recv_help:'ユーザー数',
						tab_smtp_msg_size:'メールサイズの制限',
						tab_smtp_msg_size_help:'MB',
						tab_smtp_limit_waypoint_server:'経路上のサーバー数の制限',
						tab_smtp_limit_waypoint_server_help:'サーバー数',
						tab_smtp_account_check: '内部ユーザアカウント検査',
						tab_smtp_relay_inspection: 'リレー検査',
						tab_smtp_relay_inspection_item1: 'ローカルIP許可',
						tab_smtp_relay_inspection_item2: 'SMTP認証されたユーザーを許可',
						tab_smtp_relay_inspection_item3: '内部送信者のドメインだけを許可',
						tab_smtp_relay_inspection_item4: 'リレー許可IP',

						tab_pattern:'パターンフィルタ',
						tab_pattern_help:'  登録されたパターン情報でメールをフィルタリングできます。',
						tab_pattern_usage:'パターンフィルタ',
						tab_pattern_usage_label_switch_on:'ON',
						tab_pattern_usage_label_switch_off:'OFF',
						tab_pattern_version:'バージョン',
						tab_pattern_update_time:'更新日時',

						tab_content:'コンテンツフィルタ',
						tab_content_help:'  登録されたコンテンツフィルタ(特定の文字列チェック)でメールをスパムとして分類できます。',
						tab_content_usage:'コンテンツフィルタ',
						tab_content_usage_label_switch_on:'ON',
						tab_content_usage_label_switch_off:'OFF',
						tab_content_etc:'フィルタの追加・削除',
						tab_content_search_all:'すべて',
						tab_content_search_name:'フィルタ名',
						tab_content_search_info:'フィルタ情報',
						tab_content_search_register:'登録者',
						tab_content_search_time:'登録日',
						tab_content_search_object:'適用対象',
						tab_content_search_rule:'適用ルール',
						tab_content_search_usage:'ON・OFF',
						tab_content_list_name:'フィルタ名',
						tab_content_list_info:'フィルタ情報',
						tab_content_list_mail_type:'メールの分類',
						tab_content_list_register:'登録者',
						tab_content_list_time:'登録日',
						tab_content_list_object:'適用対象',
						tab_content_list_rule:'適用ルール',
						tab_content_list_usage:'編集・削除',
						tab_content_add_modal_title:'コンテンツフィルタの追加',
						tab_content_add_modal_name:'フィルタ名',
						tab_content_add_modal_if1:'フィルタリング条件',
						tab_content_add_modal_if1_subject:'件名',
						tab_content_add_modal_if1_url:'本文内のURL',
						tab_content_add_modal_if1_sender_env:'送信者(Header) ドメイン',
						tab_content_add_modal_if1_recver_env:'受信者(Header) ドメイン',
						tab_content_add_modal_if1_sender_head:'送信者(Header)',
						tab_content_add_modal_if1_recver_head:'受信者(Header)',
						tab_content_add_modal_if1_cc:'複数の受信者(CC-Header)',
						tab_content_add_modal_if1_total_header:'ヘッダすべて',
						tab_content_add_modal_if1_header:'ヘッダー値',
						tab_content_add_modal_if1_content_type:'Content-Type',
						tab_content_add_modal_if1_content:'本文',
						tab_content_add_modal_if1_mail_size:'メールサイズ',
						tab_content_add_modal_if1_ip:'IP',
						tab_content_add_modal_if1_file_name:'添付ファイル名',
						tab_content_add_modal_if1_file_content:'添付ファイル内容',
						tab_content_add_modal_if1_smtp_id:'SMTP認証ID',
						tab_content_add_modal_if1_country:'送信国',
						tab_content_add_modal_if1_extension:'添付ファイル拡張子名',
						tab_content_add_modal_if2_include:'を含む',
						tab_content_add_modal_if2_not_include:'を含まない',
						tab_content_add_modal_if2_same:'と一致する',
						tab_content_add_modal_if2_not_same:'と一致しない',
						tab_content_add_modal_if2_start:'で始まる',
						tab_content_add_modal_if2_not_start:'で始まらない',
						tab_content_add_modal_if2_end:'で終わる',
						tab_content_add_modal_if2_not_end:'で終わらない',
						tab_content_add_modal_if2_fit:'に該当する(正規表現)',
						tab_content_add_modal_if2_not_fit:'に該当しない(正規表現)',
						tab_content_add_modal_if2_fit_isCase:'に該当する(正規表現、大文字小文字)',
						tab_content_add_modal_if2_not_fit_isCase:'に該当しない(正規表現、大文字小文字)',
						tab_content_add_modal_if2_not_existence:'が存在しない',
						tab_content_add_modal_if2_english:'が英語であれば',
						tab_content_add_modal_calculate:'チェック条件',
						tab_content_add_modal_calculate_once:'1つの条件でも該当すれば',
						tab_content_add_modal_calculate_all:'すべての条件に該当すれば',
						tab_content_add_modal_mail_class:'メールの処理',
						tab_content_add_modal_mail_class_admin:'管理者定義メールとして処理',
						tab_content_add_modal_mail_class_spam:'迷惑メールとして処理',
						tab_content_add_modal_mail_class_spammy:'迷惑メールの疑いで処理',
						tab_content_add_modal_register:'登録者',
						tab_content_add_modal_date:'登録日',
						tab_content_add_modal_object:'適用対象',
						tab_content_add_modal_object_label_switch_on:'すべて',
						tab_content_add_modal_object_label_switch_off:'個別',
						tab_content_add_modal_rule:'適用ルール',
						tab_content_add_modal_rule_label_switch_on:'許可',
						tab_content_add_modal_rule_label_switch_off:'ブロック',
						tab_content_add_modal_usage:'ON・OFF',
						tab_content_add_modal_usage_label_switch_on:'ON',
						tab_content_add_modal_usage_label_switch_off:'OFF',
						tab_content_update_modal_title: 'コンテンツフィルタを変更する',

						tab_process_method:'基本処理方法',
						tab_process_method2: '処理方法',
						tab_process_method_help:'  共通的な処理方法について定義します',
						tab_process_method_select_option_common: 'デフォルト設定を使用',
						tab_process_method_select_option_default:'送信者ブロック',
						tab_process_method_select_option_tag:'件名変更',
						tab_process_method_select_option_add_header:'ヘッダー追加',
						tab_process_method_select_option_subject: '通知メール送信',
						tab_process_method_modify_return:'応答コード変更',
						tab_process_method_return_policy_name:'ポリシー',
						tab_process_method_return_default_msg:'デフォルトメッセージ',
						tab_process_method_add_header_name:'ヘッダー名: ',
						tab_process_method_add_header_value:'ヘッダー値: ',

						tab_tag_title: 'タギング',
						tab_tag_help: '  メールを分類できる値をヘッダに追加します。',
						tab_tag_use: 'タギング処理',
						tab_tag_sort: '分類',
						tab_tag_type: 'タイプ',
						tab_tag_type_ip: 'IP',
						tab_tag_type_domain: 'ドメイン',
						tab_tag_type_email: 'Eメール',
						tab_tag_spamTags: 'タギング設定',
						tab_tag_spamTags_item: 'ヘッダー値',
						tab_tag_spamTags_item2: 'ヘッダー名',
						tab_tag_spamTags_item3: '編集/削除',
						tab_tag_spamTags_default: 'デフォルト',
						tab_tag_spamTags_default_usage: 'デフォルトの使用方法',
						tab_tag_add_spamTags: 'タギング追加',
						tab_tag_update_spamTags: 'タギング編集',
						tab_tag_rule: 'ポリシー',
						tab_tag_desc: '説明',
						tab_tag_setting: 'ステータス情報',
						tab_tag_select_all: 'すべて',
						tab_tag_select_rule: 'ルール',
						tab_tag_select_desc: '説明',
						tab_tag_add_rule: 'タギング·ルール追加',
						tab_tag_update_rule: 'タギング·ルール編集',
						tab_tag_graph: 'タグ ステータス',
						tab_tag_cond: '条件',
						tab_tag_del_rule: 'タギング·ルール削除',

						tab_tag_no_sort_msg: '分類を指定してください。',
						tab_tag_no_type_msg: 'タイプを指定してください。',
						tab_tag_no_rule_msg: 'ポリシーを入力してください。',
						tab_tag_no_overlap: '分類またはヘッダー名が重複しています。 再度、入力してください',
						tab_tag_no_overlap2: 'ポリシーが重複しています。 再度、入力してください。',
						tab_tag_delete_msg: 'タグを削除する際、,分類された値が ',
						tab_tag_delete_msg2: ' ルールも削除されます。 削除しますか?',
						tab_tag_help2: '  ルールを指定していない対象についてはデフォルト値として設定されます。',

						tab_all_to: 'を',
						tab_all_to2: 'を'

					},
					spamPolicyProcessMethod:{
						recver_exist:'受信者アカウントチェック',
						eml_size:'メールサイズ',
						relay:'リレー',
						spf:'SPF',
						pattern:'パターン',
						sender_domain_resolver:'送信者ドメイン',
						recver_domain_resolver:'受信者ドメイン',
						grey_listing:'グレーリスト',
						user_reject:'ユーザーメール拒否',
						helo_resolver:'HELOドメイン',
						contents:'コンテンツフィルタ',
						max_hop:'経路上のサーバー数の制限',
						max_recver:'受信者数制限',
						rbl:'RBL',
						sender_exist:'送信者アカウントチェック',

						sender_domain_method: '送信者ドメイン処理方法',
						sender_exist_method: '送信者アカウント確認の処理方法',
						recver_domain_method: '受信者ドメイン処理方法',
						recver_exist_method: '受信者アカウント確認の処理方法',
						recver_max_method: '受信者数制限の処理方法',
						content_eml_size: 'メッセージのサイズ処理方法',
						content_max_hop: '経由サーバ数の制限処理方法',
						content_contents: 'コンテンツ処理方法',
						content_pattern: 'パターン処理方法'

					},
					virusPolicy:{
						help:'  ウイルスポリシーを設定できます。',
						location_1depth:'ポリシー管理',
						location_2depth:'ウイルスポリシー',

						tab_default_help:'送受信ドメインのマルウェアチェック機能です。',
						usage:'利用',
						usage_label_switch_on:'ON',
						usage_label_switch_off:'OFF',
						version:'バージョン',
						update_time:'更新時間',
						vaccine_name: 'ワクチン名',
						version_info: 'バージョン情報',
						bd: 'BitDefender',
						tv: 'TurboVaccine',
						file_size_limit: 'ファイルサイズ制限',
						file_size_limit_help: '  ファイルが設定したサイズより大きければ,ウイルス検査を実行しません。',

						tab_default:'基本設定',
						tab_process_method:'マルウェア検出',
						tab_process_method2:'暗号化ファイル検出',
						tab_process_method_help:'  マルウェアが検知された場合のメール処理方法と応答コードを設定できます。',
						tab_process_method_help2:'  暗号化ファイルの処理方法について設定することができます。',
						tab_process_method_select_option_default:'送信ブロック',
						tab_process_method_select_option_del:'削除',
						tab_process_method_select_option_text:'テキスト変換',
						tab_process_method_select_option_pass:'配信された元のメール',
						tab_process_method_textfile_value:'ファイル内容: ',
						tab_process_method_textfile_name:'ファイル名:',

						msg_title: '処理結果',
						msg_content: 'この設定を適用しますか？'
							
					},
					virusPolicyProcessMethod:{
						reject:'受信拒否',
					},
					cdrPolicy:{
						help:'  CDR(Content Disarm&Reconstruction)はファイルからマルウェアを除去する情報セキュリティ技術です。機能を利用すると添付ファイルから未知のマールウェアを消去できます。',
						location_1depth:'ポリシー管理',
						location_2depth:'CDRポリシー',
						btn_add:'追加',
						btn_close:'閉じる',
						btn_submit:'適用',

						tab_usage:'CDR機能',
						tab_label_switch_on:'ON',
						tab_label_switch_off:'OFF',
						
					},
					urlPolicy: {
						help: '',
						location_1depth: 'ポリシー管理',
						location_2depth: 'URL有害ポリシー',

						tab_usage: '利用',
						tab_label_switch_on: 'ON',
						tab_label_switch_off: 'OFF',

					},
					isolationPolicy: {
						help: '',
						location_1depth: 'ポリシー管理',
						location_2depth: 'ドキュメントの分離ポリシー',

						tab_usage: '利用',
						tab_label_switch_on: 'ON',
						tab_label_switch_off: 'OFF',

					},

					mailBodyPolicy: {
						help: '  CDRポリシーを設定することができます',
						location_1depth: 'ポリシー管理',
						location_2depth: 'メール本文',
						switch_on: 'ON',
						switch_off: 'OFF',
						switch_reconfiguration: '再構成',
						switch_annotation_processing: '注釈処理',
						switch_no_processing: '処理しない',
						switch_on_the_go_analysis: '分析に移動',
						switch_removal: '除去',
						switch_allow: '許可',
						btn_close: '閉じる',
						btn_submit: '適用',
						select_domain: 'ドメイン選択',

						tab_html: 'HTML Mail',
						tab_html_banner: '結果バナー表示',
						tab_html_image: 'イメージ処理',
						tab_html_script: 'スクリプト/オブジェクト除去',
						tab_html_beacon: 'ウェブ·ビーコン除去',
						tab_html_hyperlink: 'ハイパーリンク',
						tab_html_preview: 'プレビュー',

						tab_html_modal_link_del_title: 'リンク除去メッセージ',
						tab_html_modal_link_del_category: 'メッセージ',
						tab_html_modal_link_del_default: 'デフォルト設定値を使用',

						tab_text: 'Text Mail',
						tab_text_banner: '結果表示のURLを含める。'

					},
					
					attachedFilePolicy: {
						help: '  CDRポリシーを設定することができます',
						location_1depth: 'ポリシー管理',
						location_2depth: '添付ファイルポリシー',
						switch_on: 'ON',
						switch_off: 'OFF',
						switch_allow: '許可',
						switch_block: 'ブロック',
						switch_removal: '除去',
						switch_keep: '保持',
						btn_submit: '適用',
						select_domain: 'ドメイン選択',

						tab_default: 'デフォルト設定',
						tab_default_reconfiguration: '文書再構成',
						tab_default_file_size: 'ファイルサイズ制限',
						tab_default_file_size_unit: '(MB)',
						tab_default_limit_size: 'サイズ制限超過時',
						tab_default_extension_modulation: '拡張子変調ファイル',
						tab_default_html_file: 'HTMLファイル',
						tab_default_script_file: 'スクリプトファイル',
						tab_default_script_file_help: '  セミコロンに分離',
						tab_default_extensions_not_supported: 'サポート対象外拡張子',
						tab_default_isolation:'安全なドキュメントのビューアー',

						tab_office: 'MS Office',
						tab_office_obj: '挿入されたオブジェクト',
						tab_office_macro: 'マクロ',
						tab_office_encrypt_doc: 'パスワード付きのドキュメント',
						tab_office_dde: 'DDE自動コマンド',
						tab_office_excel_shape: 'エクセル',

						tab_pdf: 'PDF',
						tab_pdf_java_script: 'JAVAスクリプト',
						tab_pdf_annotations: '注釈',
						tab_pdf_actions: 'アクション',

						tab_zip: 'ZIP',
						tab_zip_supported: 'サポートされたZip拡張子',
						tab_zip_encrypt_zip: 'パスワード付きZipファイル',
						tab_zip_include_file: '含まれるファイル数の制限',
						tab_zip_include_file_unit: '(カウント)',
						tab_zip_include_file_help: '  0 制限なし',

						tab_etc: 'Etc.',
						tab_etc_hancom: 'ハンコムオフィス',
						tab_etc_ichitaro: '一太郎',
						tab_etc_cad: 'CAD ファイル (DWG,DXF)',

					},
					
					cdrDetailPolicy: {
						help: '  CDR 詳細政策を設定できます.',
						location_1depth: '政策管理',
						location_2depth: 'CDR 詳細政策',
						
						btn_submit: '適用',
						
						label_switch_on: 'ON',
						label_switch_off: 'OFF',
						label_switch_deny: '遮断',
						label_switch_origin: '原本送信',
						label_switch_download: 'DOWNLOAD',
						label_switch_comment: 'COMMENT',
						label_switch_nothing: 'NOTHING',
						label_switch_image: 'IMAGE',
						label_switch_string: 'STRING',
						
						sd_doc_op_mode: '文書無害化モード',
						sd_doc_limit_size: '無害化処理制限サイズ',
						sd_doc_limit_mode: 'サイズ超過の時処理方法',
						cqms_nor_option_macro: '文書の中のマクロ除去',
						sd_doc_obj_mode: '文書の中のオブジェクト除去',
						sd_doc_ddeauto_block_mode: 'DDEAUTO 削除',
						sd_enc_doc_mode: '暗号設定された文書遮断',
						sd_enc_zip_mode: '暗号設定された圧縮ファイル遮断',
						sd_attached_html_handling:'添付された HTMLファイルの処理',
						sd_script_block_ext_list:'遮断スクリプト拡張子設定',
						sd_ext_mode:'拡張子偽・変造チェック',
						sd_except_ext:'拡張子偽・変造をチェックしない拡張子',
						sd_nosup_ext_mode:'支援しない拡張子遮断',
						cqms_nosup_except_ext:'支援しない拡張子で遮断しない拡張子',
						sd_original_file_import:'無害化に問題なければ原本送信',
						sd_use_original_zip_password:'ZIP 無害化後等しい暗号を使って圧縮',
						sd_deny_n_files_over_in_zip:'ZIPでファイルが設定値以上存在する場合遮断',
						sd_supported_zip_ext:'ZIPファイルと認識する拡張子',
						sd_break_filename_in_zip:'ZIPで認識できないファイル名のファイル処理',
						sd_doc_old:'MS Office 97 以下で生成されたファイルの処理',
						sd_excel_remove_shape_control:'Excel文書の ActiveXコントロール除去',
						sd_pdf_remove_actions:'PDF文書の Action 除去',
						sd_pdf_remove_annotations:'PDF文書のコメント除去',
						sd_pdf_remove_java_script:'PDF文書の JAVA Script 除去',
						sd_remove_script_tag_from_mail_contents:'スクリプト / ActiveX Object 除去政策',
						sd_remove_web_beacon_from_mail_contents:'WEB BEACON 除去政策',
						sd_remove_link_from_mail_contents:'HTML本文の中のLINK 除去',
						sd_removed_link_alert_message:'LINK 除去の時に案内メッセージ',
						sd_image_sanitize_method_from_html:'HTML本文の中にダウンロードイメージ処理方法',
						annotate_all_link_if_more_than_certain_number:'A Linkが N犬以上存在時コメント処理',
						sd_html_contents_preview_on_outlook:'Ouklook プレビュー内容表示',
						sd_show_result_url_from_mail_contents:'メール本文に無害化結果URL リンクを表示',
						sd_sanitize_result_url_host_for_mail_contents:'無害化結果画面の URL設定',
						sd_create_url_from_txt_mail	:'無害化結果ページ URL 生成',
						sd_result_url_filename	:'無害化結果ページ URL ファイル名',
						sd_create_html_from_mail:'前無害化結果ページの HTML ファイル生成',
						sd_create_result_link_method_from_html:'HTML本文に無害化結果ページを表示する方式',
						sd_result_link_name_from_html:'無害化結果ページリンク文字列設定(リンク表示方式が STRINGの場合にだけ有效)',
						sd_add_prefix_suffix_to_resultlink_in_txtmail:'TEXT本文の無害化結果ページ URL 前後に文字列追加',
						sd_safe_browsing_api_key:'SafeBrowsing API Key',
						sd_safe_browsing_client_id:'SafeBrowsing Client ID',
						no:'PDF 変換機能',
						no:'Word文書内の外部リンク除去',
						no:'文書内の脅威要素が含まれていない場合原本搬入政策',
					},
					
					certification:{
						title:'パスワード確認',
						help:'システム設定にアクセスするためにはもう一度管理者認証が必要です。',
						err_msg:'パスワードが一致しません。再度、試してください。',
						btn_confirm:'OK',
						btn_close:'閉じる'

					},
					status:{
						event_status_admin_login:'管理者ログイン',
						event_status_admin_logout:'管理者ログアウト',
						event_status_admin_modify: '管理者変更',
						event_status_user_login:'ユーザーログイン',
						event_status_user_logout:'ユーザーログアウト',
						event_status_add_user: 'ユーザー登録',
						event_status_exuser_login: '受信者ログイン',
						event_status_mail_view:'メール閲覧',
						event_status_file_download:'添付ファイルダウンロード',
						event_status_processing_result: 'SEG処理結果照会',
						event_status_svc_start:'サービス開始',
						event_status_svc_stop:'サービス停止',
						event_status_set_db_config:'DBで管理するCONFIG変更',
						event_status_log_down:'ログファイルダウンロード',
						event_status_set_auto_del:'自動削除設定の変更',
						event_status_set_smtp:'SMTP設定の変更',
						event_status_set_config:'CONFIG設定の変更',
						event_status_set_template: 'テンプレートの変更',
						event_status_admin_user_add:'管理者アカウントの追加',
						event_status_admin_user_del:'管理者アカウントの削除',
						event_status_admin_user_modify:'管理者アカウントの変更',
						event_status_user_add:'ユーザーアカウントの追加',
						event_status_user_del:'ユーザーアカウントの削除',
						event_status_user_modify:'ユーザーアカウントの変更',
						event_status_domain_add:'ドメインの追加',
						event_status_domain_del:'ドメインの削除',
						event_status_domain_modify:'ドメインの変更',
						event_status_acl_add:'アクセス権限の追加',
						event_status_acl_del:'アクセス権限の削除',
						event_status_acl_modify:'アクセス権限の変更',
						event_status_org_add:'組織の追加',
						event_status_org_del:'組織の削除',
						event_status_org_modify:'組織の変更',
						event_status_rule_add: 'スパムルールを追加',
						event_status_rule_del: 'スパムルールの削除',
						event_status_rule_modify: 'スパムルールの変更',
						event_status_filter_add: 'スパムフィルタの追加',
						event_status_filter_del: 'スパムフィルタの削除',
						event_status_filter_modify: 'スパムフィルタの変更',
						event_status_equipment_add: 'サーバーの追加',
						event_status_equipment_del: 'サーバーの削除',
						event_status_equipment_modify: 'サーバーの変更',
						event_status_admin_login_err:'管理者ログインエラー',
						event_status_admin_logout_err:'管理者ログアウトエラー',
						event_status_admin_modify_err: '管理者変更エラー',
						event_status_user_login_err:'ユーザーログインエラー',
						event_status_user_logout_err:'ユーザーログアウトエラー',
						event_status_add_user_err: 'ユーザー登録エラー',
						event_status_user_id_err: 'ユーザーIDエラー',
						event_status_user_pw_err: 'ユーザーパスワードエラー',
						event_status_exuser_login_err: '受信者ログインエラー',
						event_status_mail_view_err:'メール閲覧エラー',
						event_status_file_download_err:'添付ファイルダウンロードエラー',
						event_status_processing_result_err: 'SEG処理結果照会エラー',
						event_status_svc_start_err:'サービス開始エラー',
						event_status_svc_stop_err:'サービス停止エラー',
						event_status_set_db_config_err:'DBで管理するCONFIG変更エラー',
						event_status_log_down_err:'ログファイルダウンロードエラー',
						event_status_set_auto_del_err:'自動削除設定の変更エラー',
						event_status_set_smtp_err:'SMTP設定の変更エラー',
						event_status_set_config_err:'CONFIG設定の変更エラー',
						event_status_set_template_err: 'テンプレート変更エラー',
						event_status_admin_user_add_err:'管理者アカウントの追加エラー',
						event_status_admin_user_del_err:'管理者アカウントの削除エラー',
						event_status_admin_user_modify_err:'管理者アカウントの変更エラー',
						event_status_user_add_err:'ユーザーアカウントの追加エラー',
						event_status_user_del_err:'ユーザーアカウントの削除エラー',
						event_status_user_modify_err:'ユーザーアカウントの変更エラー',
						event_status_domain_add_err:'ドメインの追加エラー',
						event_status_domain_del_err:'ドメインの削除エラー',
						event_status_domain_modify_err:'ドメインの変更エラー',
						event_status_acl_add_err:'アクセス権限の追加エラー',
						event_status_acl_del_err:'アクセス権限の削除エラー',
						event_status_acl_modify_err:'アクセス権限の変更エラー',
						event_status_org_add_err:'組織の追加エラー',
						event_status_org_del_err:'組織の削除エラー',
						event_status_org_modify_err:'組織の変更エラー',
						event_status_rule_add_err: 'スパムルールを追加エラー',
						event_status_rule_del_err: 'スパムルールの削除エラー',
						event_status_rule_modify_err: 'スパムルールの変更エラー',
						event_status_filter_add_err: 'スパムフィルタの追加エラー',
						event_status_filter_del_err: 'スパムフィルタの削除エラー',
						event_status_filter_modify_err: 'スパムフィルタの変更エラー',
						event_status_equipment_add_err: 'サーバーの追加エラー',
						event_status_equipment_del_err: 'サーバーの削除エラー',
						event_status_equipment_modify_err: 'サーバーの変更エラー',
						event_status_err_unknown:'不明なエラー'

					},
					recordStatus:{
						auth_fail:'認証失敗',
						sender_unknown:'不明な送信者',
						receiver_unknown:'不明な受信者',
						relay_deny:'リレー拒否',
						over_eml_size:'メールサイズの制限超過',
						over_hop_count:'経路上サーバー数の制限超過',
						send_email:'メール受信',
						queued:'キュー待ち',
						queued_seg:'SEGキュー待ち',
						queued_mirror:'ミラー',
						rep_saved:'バックアップ保存',
						queued_seg_in:'無害化要求',
						queued_seg_out:'CDR要求',
						seg_virus_unset:'マルウェアスキャン：OFF',
						seg_virus_pass:'マルウェアスキャン :問題なし',
						seg_virus_deleted:'マルウェアスキャン：ファイル削除',
						seg_virus_disinfected:'マルウェアスキャン：駆除',
						seg_virus_infected:'マルウェアスキャン：感染',
						seg_virus_suspected:'マルウェアスキャン：マルウェアの疑い',
						seg_virus_encryption:'暗号化ファイル',
						seg_requested:'SEG処理要求',
						seg_grey_unset:'GREYチェック：OFF',// spam start
						seg_grey_pass:'GREYチェック : 正常',//迷惑メール_GREY完了
						seg_grey_reject:'GREYチェック : ブロック',//迷惑メールGREY
						seg_grey_except:'GREYチェック : 例外処理',
						seg_rbl_unset:'RBLチェック : OFF',
						seg_rbl_pass:'RBLチェック : 問題なし',//迷惑メール_RBL完了
						seg_rbl_reject:'RBLチェック : ブロック',//迷惑メールRBL
						seg_rbl_except:'RBLチェック : 例外処理',
						seg_spf_unset:'SPFチェック : OFF',
						seg_spf_pass:'SPFチェック : 問題ない',//迷惑メールSPF完了
						seg_spf_reject:'SPFチェック : ブロック',//迷惑メールSPFブロック
						seg_spf_except:'SPFチェック : 例外処理',
						seg_hdr_unset:'HELOドメインチェック : OFF',
						seg_hdr_pass:'HELOドメインチェック : 問題なし',//迷惑メール_HELOドメイン検査合格
						seg_hdr_reject:'HELOドメインチェック : ブロック',//迷惑メール_HELOドメインチェックブロック
						seg_hdr_except:'HELOドメインチェック : 例外処理',
						seg_sdr_unset:'送信者ドメイン検査 : OFF',
						seg_sdr_pass:'送信者ドメイン検査 : 問題なし',//迷惑メール_送信者ドメインの検査を完了
						seg_sdr_reject:'送信者ドメイン検査 : ブロック',//迷惑メール_送信者ドメインの検査ブロック
						seg_sdr_except:'送信者ドメイン検査 : 例外処理',
						seg_rdr_unset:'受信者ドメイン検査 : OFF',
						seg_rdr_pass:'受信者ドメイン検査 : 問題なし',//迷惑メール_受信者のドメイン検査合格
						seg_rdr_reject:'受信者ドメイン検査 : ブロック',//迷惑メール_受信者のドメインの検査ブロック
						seg_rdr_except:'受信者ドメイン検査 : 例外処理',
						seg_smr_unset:'送信者メールチェック : OFF',
						seg_smr_pass:'送信者メールチェック : 問題なし',
						seg_smr_reject:'送信者なし',
						seg_smr_except:'送信者メールチェック : 例外処理',
						seg_rmr_unset:'受信者メールチェック : OFF',
						seg_rmr_pass:'受信者メールチェック : 問題なし',
						seg_rmr_reject:'受信者なし',
						seg_rmr_except:'受信者メールチェック : 例外処理',
						seg_relay_unset:'リレーチェック : OFF',
						seg_relay_pass:'リレーチェック : 問題なし',//迷惑メール_リレー完了
						seg_relay_reject:'リレーチェック : ブロック',//迷惑メールリレー
						seg_relay_except:'リレーチェック : 例外処理',
						seg_eml_size_unset:'メールサイズ制限 : OFF',
						seg_eml_size_pass:'メールサイズ制限 : 問題なし',
						seg_eml_size_reject:'メールサイズ制限 : ブロック',
						seg_eml_size_except:'メールサイズ制限 : 例外処理',
						seg_max_hop_unset:'パススルーサーバー数の制限 : OFF',
						seg_max_hop_pass:'パススルーサーバー数の制限 : 問題なし',
						seg_max_hop_reject:'パススルーサーバー数の制限 : ブロック',
						seg_max_hop_except:'パススルーサーバー数の制限 : 例外処理',
						seg_contents_unset:'コンテンツフィルタ : OFF',
						seg_contents_pass:'コンテンツフィルタ : 問題なし',
						seg_contents_reject:'コンテンツフィルタ : ブロック',
						seg_contents_except:'コンテンツフィルタ : 例外処理',
						seg_pattern_unset:'パターンフィルタ : OFF',
						seg_pattern_pass:'パターンフィルタ : 問題なし',
						seg_pattern_reject:'パターンフィルタ : ブロック',
						seg_pattern_except:'パターンフィルタ : 例外処理',
						seg_user_reject_unset:'ユーザー定義ブロック : OFF',
						seg_user_reject:'ユーザー定義 : ブロック',
						seg_user_except_unset:'ユーザー定義例外処理 : OFF',
						seg_user_except:'ユーザー定義 : 例外処理',
						delivery_sent:'メール配送',
						seg_spam_act_unset:'迷惑メールブロック : OFF',
						seg_spam_act_pass:'迷惑メールブロック : 問題なし',//迷惑メール完了
						seg_spam_act_reject:'迷惑メールブロック : 受信拒否',//迷惑メールをブロックする
						seg_spam_act_except:'迷惑メールブロック : 例外処理',
						seg_spam_act_update_subject:'迷惑メールブロック : 件名変更',
						seg_spam_act_add_hdr:'迷惑メールブロック : ヘッダ追加',
						seg_virus_act_unset:'マルウェアチェック : OFF',
						seg_virus_act_pass:'マルウェアチェック : 問題なし',//ウイルス完了
						seg_virus_act_reject:'マルウェアチェック : ブロック',//ウイルス対策
						seg_virus_act_except:'マルウェアチェック : 例外処理',
						seg_virus_act_delete:'マルウェアチェック : ファイル削除',
						seg_virus_act_conv_text:'マルウェアチェック : テキスト変換',
						seg_virus_act_update_subject:'マルウェアチェック : 件名変更',
						seg_virus_act_add_hdr:'マルウェアチェック : ヘッダ追加',
						seg_cdr_act_unset:'文書無害化 : OFF',
						seg_cdr_act_pass:'文書無害化 : 問題なし',//ドキュメント無害化完了
						seg_cdr_act_reject:'文書無害化 : ブロック',//ドキュメント無害化ブロック
						seg_cdr_act_except:'文書無害化 : 例外処理',
						seg_cdr_act_delete:'文書無害化 : ファイル削除',
						seg_cdr_act_conv_text:'テキストファイルに変換',
						seg_cdr_act_file_isolation: 'ファイルの分離',
						seg_cdr_act_update_subject:'文書無害化 : 件名変更',
						seg_cdr_act_add_hdr:'文書無害化 : ヘッダ追加',
						seg_cdr_unset:'CDR処理 : OFF',
						seg_cdr_pass:'CDR処理 : 問題なし',
						seg_cdr_delete:'CDR処理 : 削除',
						seg_cdr_encryption:'CDR処理 : 暗号化ファイル',
						seg_over_max_retry_drop:'無害化失敗のためメール削除',
						seg_over_max_retry_send_original_eml:'無害化失敗のためオリジナルメールを配送',
						seg_over_max_retry_send_alarm_recver:'無害化失敗のため受信者に通知メール送信',
						seg_over_max_retry_send_alarm_sender:'無害化失敗のため送信者にリターンメールを送信',
						seg_tag_unset: 'タグ: OFF',
						seg_tag_pass: 'タグ: 問題なし',
						seg_tag_reject: 'タグ: ブロック',
						seg_tag_except: 'タグ: 例外処理',
						seg_tag_add: 'タグ: 追加',
						seg_recver_count_unset: '受信者数制限: OFF',
						seg_recver_count_pass: '受信者数制限: 問題なし',
						seg_recver_count_reject: '受信者数制限: ブロック',
						seg_recver_count_except: '受信者数制限: 例外処理',
						seg_scam_unset: 'Scam: OFF',
						seg_scam_pass: 'Scam: 問題なし',
						seg_scam_reject: 'Scam: ブロック',
						seg_scam_except: 'Scam: 例外処理',

						err_bad_command:'SMTPコマンドエラー',
						err_eml_parsing:'EML解析エラー',
						err_queuing:'キュー待ちエラー',
						err_queuing_seg:'ミラーエラー',
						err_queuing_mirror:'ミラー一時保存エラー',
						err_rep_save:'コピーを保存中にエラー',
						err_seg_req_temp:'無害化リクエスト中に一時的なエラー',
						err_seg_req_perm:'無害化リクエストに失敗',
						err_seg_out_temp:'CDRリクエスト中に一時的なエラー',
						err_seg_out_perm:'CDRリクエストに失敗',
						err_chk_virus:'マルウェアスキャンエラー',
						err_chk_cdr:'CDR処理エラー',
						err_seg_temp:'SEG処理中に一時的なエラー',
						err_seg_perm:'SEG処理に失敗',

						err_seg_grey:'GREYエラー',
						err_seg_rbl:'RBLエラー',
						err_seg_spf:'SPFエラー',
						err_seg_hdr:'HELOドメイン検査エラー',
						err_seg_sdr:'送信者ドメインの検査エラー',
						err_seg_rdr:'受信者ドメインの検査エラー',
						err_seg_smr:'送信者メールアドレス検査エラー',
						err_seg_rmr:'受信者メールアドレス検査エラー',
						err_seg_relay:'リレー検査エラー',
						err_seg_eml_size:'メールサイズ制限エラー',
						err_seg_max_hop:'パススルーサーバー数の制限エラー',
						err_seg_contents:'コンテンツフィルタエラー',
						err_seg_pattern:'パターンフィルタエラー',
						err_seg_user_reject:'ユーザー定義のブロックエラー',
						err_seg_user_except:'ユーザー定義の例外処理エラー',
						err_seg_virus:'マルウェアチェック処理エラー',
						err_seg_cdr:'CDR処理エラー',

						err_delivery_temp:'メール配送中に一時的なエラー',
						err_delivery_perm:'メール配送に失敗',

						err_none:'エラー'
					}
				}
			}
		}
		
	}, function(err, t) {
	    // init set content
	    updateContent();
	  })
});

function updateContent(){
	
	//로그인
	$(".i18n-login-saveId").text(i18next.t("login.save_id"));
	$(".i18n-login-login").text(i18next.t('login.login'));
	$(".i18n-login-register").text(i18next.t('login.register'));
	  
	//LeftMenu Start.
	//대시보드
	$(".i18n-leftmenu-dashboard").text(i18next.t('leftmenu.dashboard'));
	
	//고객사 포탈
	$(".i18n-leftmenu-ma-list-total").text(i18next.t('leftmenu.ma_list_total'));
	$(".i18n-leftmenu-project-list-total").text(i18next.t('leftmenu.project_list_total'));
	$(".i18n-leftmenu-notice").text(i18next.t('leftmenu.notice'));
	$(".i18n-leftmenu-customer-infomation").text(i18next.t('leftmenu.customer_infomation'));
	$(".i18n-malist-ma-view").text(i18next.t('malist.ma_view'));
	$(".i18n-malist-ma-reception-message").text(i18next.t('malist.ma_reception_message'));
	$(".i18n-malist-ma-response-message").text(i18next.t('malist.ma_response_message'));
	$(".i18n-malist-ma-comment-message").text(i18next.t('malist.ma_comment_message'));
	$(".i18n-malist-ma-view-ticketno").text(i18next.t('malist.ma_view_ticketno'));
	$(".i18n-malist-ma-view-createdtime").text(i18next.t('malist.ma_view_createdtime'));
	$(".i18n-malist-ma-view-supptotrequestor").text(i18next.t('malist.ma_view_supptotrequestor'));
	$(".i18n-malist-ma-view-creatorname").text(i18next.t('malist.ma_view_creatorname'));
	$(".i18n-malist-ma-view-receptiontype").text(i18next.t('malist.ma_view_receptiontype'));
	$(".i18n-malist-ma-view-catogryko").text(i18next.t('malist.ma_view_catogryko'));
	$(".i18n-malist-ma-view-enddate").text(i18next.t('malist.ma_view_enddate'));
	$(".i18n-malist-ma-view-ownername").text(i18next.t('malist.ma_view_ownername'));
	$(".i18n-malist-ma-view-responsetype").text(i18next.t('malist.ma_view_responsetype'));
	$(".i18n-malist-ma-view-PRIORITY_KO").text(i18next.t('malist.ma_view_PRIORITY_KO'));
	$(".i18n-malist-ma-view-STATUS_KO").text(i18next.t('malist.ma_view_STATUS_KO'));
	$(".i18n-domain-list-item-crm-setting").text(i18next.t('domain.list_item_crm_setting'));
	$(".i18n-admin-tab-admin-addDel-list-admin-id").text(i18next.t('admin.tab_admin_addDel_list_admin_id'));
	$(".i18n-admin-tab-admin-addDel-list-admin-name").text(i18next.t('admin.tab_admin_addDel_list_admin_name'));
	$(".i18n-NoticeList-view-timeCreated").text(i18next.t('NoticeList.view_timeCreated'));
	$(".i18n-NoticeList-view-timeUpdated").text(i18next.t('NoticeList.view_timeUpdated'));
	$(".i18n-NoticeList-view-type").text(i18next.t('NoticeList.view_type'));
	$(".i18n-NoticeList-view-division").text(i18next.t('NoticeList.view_division'));
	$(".i18n-NoticeList-view-Content").text(i18next.t('NoticeList.view_Content'));
	$(".i18n-NoticeList-view").text(i18next.t('NoticeList.view'));
	$(".i18n-malist-ma_search-list-stat").text(i18next.t('malist.ma_search_list_stat'));
	$(".i18n-malist-ma_search-list-catogry").text(i18next.t('malist.ma_search_list_catogry'));
	$(".i18n-malist-ma_search-list-supptotrequestor").text(i18next.t('malist.ma_search_list_supptotrequestor'));
	$(".i18n-malist-total").text(i18next.t('malist.total'));
	$(".i18n-malist-Problem").text(i18next.t('malist.Problem'));
	$(".i18n-malist-Feature-inquiry").text(i18next.t('malist.Feature_inquiry'));
	$(".i18n-malist-Technical-Support").text(i18next.t('malist.Technical_Support'));
	$(".i18n-malist-development").text(i18next.t('malist.development'));
	$(".i18n-malist-Periodic-Inspection").text(i18next.t('malist.Periodic_Inspection'));
	$(".i18n-malist-Others").text(i18next.t('malist.Others'));
	
	//모니터링
	$(".i18n-leftmenu-monitoring").text(i18next.t('leftmenu.monitoring'));
	$(".i18n-leftmenu-mail-monitoring").text(i18next.t('leftmenu.mail_monitoring'));
	$(".i18n-leftmenu-mail-list").text(i18next.t('leftmenu.mail_list'));
	$(".i18n-leftmenu-spam-declaration").text(i18next.t('leftmenu.spam_declaration'));
	$(".i18n-leftmenu-event-monitoring").text(i18next.t('leftmenu.event_monitoring'));
	$(".i18n-leftmenu-service-monitoring").text(i18next.t('leftmenu.service_monitoring'));
	$(".i18n-leftmenu-log-monitoring").text(i18next.t('leftmenu.log_monitoring'));
	$(".i18n-leftmenu-queue-monitoring").text(i18next.t('leftmenu.queue_monitoring'));
	$(".i18n-leftmenu-system-monitoring").text(i18next.t('leftmenu.system_monitoring'));
	
	//통계
	$(".i18n-leftmenu-statistics").text(i18next.t('leftmenu.statistics'));
	
	//정책
	$(".i18n-leftmenu-policy-manager").text(i18next.t('leftmenu.policy_manager'))
	$(".i18n-leftmenu-spam-policy").text(i18next.t('leftmenu.spam_policy'));
	$(".i18n-leftmenu-virus-policy").text(i18next.t('leftmenu.virus_policy'));
	$(".i18n-leftmenu-cdr-policy").text(i18next.t('leftmenu.cdr_policy'));
	$(".i18n-leftmenu-url-policy").text(i18next.t('leftmenu.url_policy'));
	$(".i18n-leftmenu-isolation-policy").text(i18next.t('leftmenu.isolation_policy'));
	$(".i18n-leftmenu-mail-body-policy").text(i18next.t('leftmenu.mail_body_policy'));
	$(".i18n-leftmenu-attached-file-policy").text(i18next.t('leftmenu.attached_file_policy'));
	$(".i18n-leftmenu-cdr-detail-policy").text(i18next.t('leftmenu.cdr_detail_policy'));
	
	//환경설정
	$(".i18n-leftmenu-preferences").text(i18next.t('leftmenu.preferences'));
	$(".i18n-leftmenu-domain-preference").text(i18next.t('leftmenu.domain_preference'));
	$(".i18n-leftmenu-autoDelete-preference").text(i18next.t('leftmenu.autoDelete_preference'));
	$(".i18n-leftmenu-smtp-preference").text(i18next.t('leftmenu.smtp_preference'));
	$(".i18n-leftmenu-config-preference").text(i18next.t('leftmenu.config_preference'));
	$(".i18n-leftmenu-notices-preference").text(i18next.t('leftmenu.notices_preference'));
	$(".i18n-leftmenu-admin-preference").text(i18next.t('leftmenu.admin_preference'));
	$(".i18n-leftmenu-user-preference").text(i18next.t('leftmenu.user_preference'));
	$(".i18n-leftmenu-equipment-preference").text(i18next.t('leftmenu.equipment_preference'));
	$(".i18n-leftmenu-product-information").text(i18next.t('leftmenu.product_information'));
	//LeftMenu End.
	
	//header
	$(".i18n-header-notice").text(i18next.t('header.notice'));
	$(".i18n-header-admin").text(i18next.t('header.admin'));
	$(".i18n-header-connect-country").text(i18next.t('header.connect_country'));
	$(".i18n-header-connect-ip").text(i18next.t('header.connect_ip'));
	$(".i18n-header-connect-time").text(i18next.t('header.connect_time'));
	
	//logout
	$(".i18n-logout-header").text(i18next.t('logout.header'));
	$(".i18n-logout-msg").text(i18next.t('logout.msg'));
	$(".i18n-logout-apply").text(i18next.t('logout.apply'));
	$(".i18n-logout-cancel").text(i18next.t('logout.cancel'));
	
	//Dashboard
	$(".i18n-dashboard-help").text(i18next.t('dashboard.help'));
	$(".i18n-dashboard-location").text(i18next.t('dashboard.location'));
	$(".i18n-dashboard-system-usage").text(i18next.t('dashboard.system_usage'));
	$(".i18n-dashboard-system-usage-cpu").text(i18next.t('dashboard.system_usage_cpu'));
	$(".i18n-dashboard-system-usage-memory").text(i18next.t('dashboard.system_usage_memory'));
	$(".i18n-dashboard-system-usage-disk").text(i18next.t('dashboard.system_usage_disk'));
	$(".i18n-dashboard-system-usage-networkRx").text(i18next.t('dashboard.system_usage_networkRx'));
	$(".i18n-dashboard-system-usage-networkTx").text(i18next.t('dashboard.system_usage_networkTx'));
	$(".i18n-dashboard-system-usage-cpu-warning-noti").text(i18next.t('dashboard.system_usage_cpu_warning_noti'));
	$(".i18n-dashboard-system-usage-cpu-danger-noti").text(i18next.t('dashboard.system_usage_cpu_danger_noti'));
	$(".i18n-dashboard-system-usage-memory-warning-noti").text(i18next.t('dashboard.system_usage_memory_warning_noti'));
	$(".i18n-dashboard-system-usage-memory-danger-noti").text(i18next.t('dashboard.system_usage_memory_danger_noti'));
	$(".i18n-dashboard-system-usage-disk-warning-noti").text(i18next.t('dashboard.system_usage_disk_warning_noti'));
	$(".i18n-dashboard-system-usage-disk-danger-noti").text(i18next.t('dashboard.system_usage_disk_danger_noti'));
	$(".i18n-dashboard-system-usage-networkRx-warning-noti").text(i18next.t('dashboard.system_usage_networkRx_warning_noti'));
	$(".i18n-dashboard-system-usage-networkRx-danger-noti").text(i18next.t('dashboard.system_usage_networkRx_danger_noti'));
	$(".i18n-dashboard-system-usage-networkTx-warning-noti").text(i18next.t('dashboard.system_usage_networkTx_warning_noti'));
	$(".i18n-dashboard-system-usage-networkTx-danger-noti").text(i18next.t('dashboard.system_usage_networkTx_danger_noti'));
	$(".i18n-dashboard-system-usage-anynoti").text(i18next.t('dashboard.system_usage_anynoti'));
	$(".i18n-dashboard-abatement").text(i18next.t('dashboard.abatement'));
	$(".i18n-dashboard-abatement-division").text(i18next.t('dashboard.abatement_division'));
	$(".i18n-dashboard-abatement-division").attr('title',i18next.t('dashboard.abatement_division'));
	$(".i18n-dashboard-abatement-spam").text(i18next.t('dashboard.abatement_spam'));
	$(".i18n-dashboard-abatement-spam").attr('title',i18next.t('dashboard.abatement_spam'));
	$(".i18n-dashboard-abatement-virus").text(i18next.t('dashboard.abatement_virus'));
	$(".i18n-dashboard-abatement-virus").attr('title',i18next.t('dashboard.abatement_virus'));
	$(".i18n-dashboard-abatement-cdr").text(i18next.t('dashboard.abatement_cdr'));
	$(".i18n-dashboard-abatement-cdr").attr('title',i18next.t('dashboard.abatement_cdr'));
	$(".i18n-dashboard-abatement-normal").text(i18next.t('dashboard.abatement_normal'));
	$(".i18n-dashboard-abatement-normal").attr('title',i18next.t('dashboard.abatement_normal'));
	$(".i18n-dashboard-abatement-integrated").text(i18next.t('dashboard.abatement_integrated'));
	$(".i18n-dashboard-abatement-integrated").attr('title',i18next.t('dashboard.abatement_integrated'));
	$(".i18n-dashboard-abatement-today").text(i18next.t('dashboard.abatement_today'));
	$(".i18n-dashboard-abatement-today").attr('title',i18next.t('dashboard.abatement_today'));
	$(".i18n-dashboard-sender-top5").text(i18next.t('dashboard.sender_top5'));
	$(".i18n-dashboard-sender-no").text(i18next.t('dashboard.sender_no'));
	$(".i18n-dashboard-sender-title").text(i18next.t('dashboard.sender_title'));
	$(".i18n-dashboard-sender-count").text(i18next.t('dashboard.sender_count'));
	$(".i18n-dashboard-sender-domain-top5").text(i18next.t('dashboard.sender_domain_top5'));
	$(".i18n-dashboard-sender-domain-no").text(i18next.t('dashboard.sender_domain_no'));
	$(".i18n-dashboard-sender-domain-title").text(i18next.t('dashboard.sender_domain_title'));
	$(".i18n-dashboard-sender-domain-count").text(i18next.t('dashboard.sender_domain_count'));
	$(".i18n-dashboard-sender-domain-no-title").text(i18next.t('dashboard.sender_domain_no_title'));
	$(".i18n-dashboard-sender-country-top5").text(i18next.t('dashboard.sender_country_top5'));
	$(".i18n-dashboard-sender-country-no").text(i18next.t('dashboard.sender_country_no'));
	$(".i18n-dashboard-sender-country-title").text(i18next.t('dashboard.sender_country_title'));
	$(".i18n-dashboard-sender-country-count").text(i18next.t('dashboard.sender_country_count'));
	$(".i18n-dashboard-amountOfSendRecv").text(i18next.t('dashboard.amountOfSendRecv'));
	$(".i18n-dashboard-amount-division").text(i18next.t('dashboard.amount_division'));
	$(".i18n-dashboard-amount-division").attr('title',i18next.t('dashboard.amount_division'));
	$(".i18n-dashboard-amount-send").text(i18next.t('dashboard.amount_send'));
	$(".i18n-dashboard-amount-send").attr('title',i18next.t('dashboard.amount_send'));
	$(".i18n-dashboard-amount-recv").text(i18next.t('dashboard.amount_recv'));
	$(".i18n-dashboard-amount-recv").attr('title',i18next.t('dashboard.amount_recv'));
	$(".i18n-dashboard-amount-send-recv").text(i18next.t('dashboard.amount_send_recv'));
	$(".i18n-dashboard-amount-send-recv").attr('title',i18next.t('dashboard.amount_send_recv'));
	$(".i18n-dashboard-amount-relay").text(i18next.t('dashboard.amount_relay'));
	$(".i18n-dashboard-amount-relay").attr('title',i18next.t('dashboard.amount_relay'));
	$(".i18n-dashboard-recver-top5").text(i18next.t('dashboard.recver_top5'));
	$(".i18n-dashboard-recver-no").text(i18next.t('dashboard.recver_no'));
	$(".i18n-dashboard-recver-title").text(i18next.t('dashboard.recver_title'));
	$(".i18n-dashboard-recver-count").text(i18next.t('dashboard.recver_count'));
	$(".i18n-dashboard-recver-domain-top5").text(i18next.t('dashboard.recver_domain_top5'));
	$(".i18n-dashboard-recver-domain-no").text(i18next.t('dashboard.recver_domain_no'));
	$(".i18n-dashboard-recver-domain-title").text(i18next.t('dashboard.recver_domain_title'));
	$(".i18n-dashboard-recver-domain-count").text(i18next.t('dashboard.recver_domain_count'));
	$(".i18n-dashboard-recver-domain-no-title").text(i18next.t('dashboard.recver_domain_no_title'));
	
	//mailList
	$(".i18n-maillist-help").text(i18next.t('maillist.help'));
	$(".i18n-maillist-location-1depth").text(i18next.t('maillist.location_1depth'));
	$(".i18n-maillist-location-2depth").text(i18next.t('maillist.location_2depth'));
	$(".i18n-maillist-total").text(i18next.t('maillist.total'));
	$(".i18n-maillist-count").text(i18next.t('maillist.count'));
	$(".i18n-maillist-search-select-term").text(i18next.t('maillist.search_select_term'));
	$(".i18n-maillist-search-sender").text(i18next.t('maillist.search_sender'));
	$(".i18n-maillist-search-recver").text(i18next.t('maillist.search_recver'));
	$(".i18n-maillist-search-title").text(i18next.t('maillist.search_title'));
	$(".i18n-maillist-search-file").text(i18next.t('maillist.search_file'));
	$(".i18n-maillist-search-mail-process").text(i18next.t('maillist.search_mail_process'));
	$(".i18n-maillist-search-sent-type").text(i18next.t('maillist.search_sent_type'));
	$(".i18n-maillist-search-sent-type-send").text(i18next.t('maillist.search_sent_type_send'));
	$(".i18n-maillist-search-sent-type-recv").text(i18next.t('maillist.search_sent_type_recv'));
	$(".i18n-maillist-search-sent-type-rs").text(i18next.t('maillist.search_sent_type_rs'));
	$(".i18n-maillist-search-sent-type-relay").text(i18next.t('maillist.search_sent_type_relay'));
	$(".i18n-maillist-search-sent-type-mirror").text(i18next.t('maillist.search_sent_type_mirror'));
	$(".i18n-maillist-search-final-stat").text(i18next.t('maillist.search_final_stat'));
	$(".i18n-maillist-search-sender-unknown").text(i18next.t('maillist.search_sender_unknown'));
	$(".i18n-maillist-search-receiver-unknown").text(i18next.t('maillist.search_receiver_unknown'));
	$(".i18n-maillist-search-relay-deny").text(i18next.t('maillist.search_relay_deny'));
	$(".i18n-maillist-search-success-delivery-temp").text(i18next.t('maillist.search_success_delivery_temp'));
	$(".i18n-maillist-search-err-delivery-temp").text(i18next.t('maillist.search_err_delivery_temp'));
	$(".i18n-maillist-search-abatement").text(i18next.t('maillist.search_abatement'));
	$(".i18n-maillist-search-abatement-spam").text(i18next.t('maillist.search_abatement_spam'));
	$(".i18n-maillist-search-abatement-virus").text(i18next.t('maillist.search_abatement_virus'));
	$(".i18n-maillist-search-abatement-cdr").text(i18next.t('maillist.search_abatement_cdr'));
	$(".i18n-maillist-search-abatement-normal").text(i18next.t('maillist.search_abatement_normal'));
	$(".i18n-maillist-search-etc").text(i18next.t('maillist.search_etc'));
	$(".i18n-maillist-search-etc-file").text(i18next.t('maillist.search_etc_file'));
	$(".i18n-maillist-search-etc-dsn").text(i18next.t('maillist.search_etc_dsn'));
	$(".i18n-maillist-search-mid").text(i18next.t('maillist.search_mid'));
	$(".i18n-maillist-search-country").text(i18next.t('maillist.search_country'));
	$(".i18n-maillist-search-all-country").text(i18next.t('maillist.search_all_country'));
	$(".i18n-maillist-search-select-country").text(i18next.t('maillist.search_select_country'));
	$(".i18n-maillist-search-mail-delivery").text(i18next.t('maillist.search_mail_delivery'));
	$(".i18n-maillist-search-help1").text(i18next.t('maillist.search_help1'));
	$(".i18n-maillist-search-help2").text(i18next.t('maillist.search_help2'));
	$(".i18n-maillist-search-help3").text(i18next.t('maillist.search_help3'));
	$(".i18n-maillist-close").text(i18next.t('maillist.close'));
	$(".i18n-maillist-submit").text(i18next.t('maillist.submit'));
	$(".i18n-maillist-btn-submit").text(i18next.t('maillist.btn_submit'));
	$(".i18n-maillist-list-date").text(i18next.t('maillist.list_date')); 
	$(".i18n-maillist-list-date").attr('title',i18next.t('maillist.list_data'));
	$(".i18n-maillist-list-sender").text(i18next.t('maillist.list_sender')); 
	$(".i18n-maillist-list-sender").attr('title',i18next.t('maillist.list_sender'));
	$(".i18n-maillist-list-recver").text(i18next.t('maillist.list_recver')); 
	$(".i18n-maillist-list-recver").attr('title',i18next.t('maillist.list_recver'));
	$(".i18n-maillist-list-sent-type").text(i18next.t('maillist.list_sent_type')); 
	$(".i18n-maillist-list-sent-type").attr('title',i18next.t('maillist.list_sent_type'));
	$(".i18n-maillist-list-sent-type-send").text(i18next.t('maillist.list_sent_type_send'));
	$(".i18n-maillist-list-sent-type-recv").text(i18next.t('maillist.list_sent_type_recv'));
	$(".i18n-maillist-list-sent-type-rs").text(i18next.t('maillist.list_sent_type_rs'));
	$(".i18n-maillist-list-sent-type-relay").text(i18next.t('maillist.list_sent_type_relay'));
	$(".i18n-maillist-list-sent-type-mirror").text(i18next.t('maillist.list_sent_type_mirror'));
	$(".i18n-maillist-list-sent-type-dsn").text(i18next.t('maillist.list_sent_type_dsn'));
	$(".i18n-maillist-list-title").text(i18next.t('maillist.list_title')); 
	$(".i18n-maillist-list-title").attr('title',i18next.t('maillist.list_title'));
	$(".i18n-maillist-list-process").text(i18next.t('maillist.list_process'));
	$(".i18n-maillist-list-file").text(i18next.t('maillist.list_file')); 
	$(".i18n-maillist-list-file").attr('title',i18next.t('maillist.list_file'));
	$(".i18n-maillist-list-size").text(i18next.t('maillist.list_size'));
	$(".i18n-maillist-list-size").attr('title',i18next.t('maillist.list_size'));
	$(".i18n-maillist-list-detail").text(i18next.t('maillist.list_detail'));
	$(".i18n-maillist-list-detail").attr('title',i18next.t('maillist.list_detail'));
	$(".i18n-maillist-list-country").text(i18next.t('maillist.list_country'));
	$(".i18n-maillist-list-country").attr('title',i18next.t('maillist.list_country'));
	$(".i18n-maillist-list-process-spam").text(i18next.t('maillist.list_process_spam'));
	$(".i18n-maillist-list-process-virus").text(i18next.t('maillist.list_process_virus'));
	$(".i18n-maillist-list-process-cdr").text(i18next.t('maillist.list_process_cdr'));
	$(".i18n-maillist-list-process-delivery").text(i18next.t('maillist.list_process_delivery'));
	$(".i18n-maillist-list-process-spam-tooltip").attr('title',i18next.t('maillist.list_process_spam_tooltip'));
	$(".i18n-maillist-list-process-virus-tooltip").attr('title',i18next.t('maillist.list_process_virus_tooltip'));
	$(".i18n-maillist-list-process-cdr-tooltip").attr('title',i18next.t('maillist.list_process_cdr_tooltip'));
	$(".i18n-maillist-list-process-delivery-tooltip").attr('title',i18next.t('maillist.list_process_delivery_tooltip'));
	$(".i18n-maillist-list-no-title").text(i18next.t('maillist.list_no_title'));
	$(".i18n-maillist-list-no-title-div").attr('title',i18next.t('maillist.list_no_title'));
	$(".i18n-maillist-list-mail-detail").attr('title',i18next.t('maillist.list_mail_datail'));
	$(".i18n-maillist-list-country-null").text(i18next.t('maillist.list_country_null'));
	$(".i18n-maillist-list-country-null").attr('title',i18next.t('maillist.list_country_null'));
	$(".i18n-maillist-list-etc-menu-header").attr('title',i18next.t('maillist.list_etc_menu_header'));
	$(".i18n-maillist-list-etc-menu-resend").attr('title',i18next.t('maillist.list_etc_menu_resend'));
	$(".i18n-maillist-list-etc-menu-spam").attr('title',i18next.t('maillist.list_etc_menu_spam'));
	$(".i18n-maillist-list-etc-menu-spam2").attr('title',i18next.t('maillist.list_etc_menu_spam2'));
	$(".i18n-maillist-list-etc-menu-eml-down").attr('title',i18next.t('maillist.list_etc_menu_eml_down'));
	$(".i18n-maillist-list-etc-menu-exception").attr('title',i18next.t('maillist.list_etc_menu_exception'));
	$(".i18n-maillist-list-etc-menu-exception-title").text(i18next.t('maillist.list_etc_menu_exception_title'));
	$(".i18n-maillist-list-etc-menu-exception-item").text(i18next.t('maillist.list_etc_menu_exception_item'));
	$(".i18n-maillist-list-etc-menu-spam-register-title").text(i18next.t('maillist.list_etc_menu_spam_register_title'));
	$(".i18n-maillist-list-etc-menu-spam-register-item").text(i18next.t('maillist.list_etc_menu_spam_register_item'));
	$(".i18n-maillist-list-etc-menu-exception-item-ip").text(i18next.t('maillist.list_etc_menu_exception_item_ip'));
	$(".i18n-maillist-list-etc-menu-exception-item-sender").text(i18next.t('maillist.list_etc_menu_exception_item_sender'));
	$(".i18n-maillist-list-etc-menu-exception-item-recver").text(i18next.t('maillist.list_etc_menu_exception_item_recver'));
	$(".i18n-maillist-list-etc-menu-exception-item-domain").text(i18next.t('maillist.list_etc_menu_exception_item_domain'));
	$(".i18n-maillist-list-etc-menu-exception-item-send-domain").text(i18next.t('maillist.list_etc_menu_exception_item_send_domain'));
	$(".i18n-maillist-list-etc-menu-exception-item-recv-domain").text(i18next.t('maillist.list_etc_menu_exception_item_recv_domain'));
	$(".i18n-maillist-list-etc-menu-exception-item-email").text(i18next.t('maillist.list_etc_menu_exception_item_email'));
	$(".i18n-maillist-list-etc-menu-exception-item2-or").text(i18next.t('maillist.list_etc_menu_exception_item2_or'));
	$(".i18n-maillist-list-etc-menu-exception-item2-and").text(i18next.t('maillist.list_etc_menu_exception_item2_and'));
	$(".i18n-maillist-list-etc-menu-exception-item2-start").text(i18next.t('maillist.list_etc_menu_exception_item2_start'));
	$(".i18n-maillist-list-etc-menu-exception-item2-end").text(i18next.t('maillist.list_etc_menu_exception_item2_end'));
	$(".i18n-maillist-list-etc-menu-exception-item-help").text(i18next.t('maillist.list_etc_menu_exception_item_help'));
	$(".i18n-maillist-list-etc-menu-spam-register-item-help").text(i18next.t('maillist.list_etc_menu_spam_register_item_help'));
	$(".i18n-maillist-process-result-title").text(i18next.t('maillist.process_result_title'));
	$(".i18n-maillist-process-spam-result-title").text(i18next.t('maillist.process_spam_result_title'));
	$(".i18n-maillist-process-virus-result-title").text(i18next.t('maillist.process_virus_result_title'));
	$(".i18n-maillist-process-cdr-result-title").text(i18next.t('maillist.process_cdr_result_title'));
	$(".i18n-maillist-process-delivery-result-title").text(i18next.t('maillist.process_delivery_result_title'));
	$(".i18n-maillist-process-result-date").text(i18next.t('maillist.process_result_date'));
	$(".i18n-maillist-process-result-stat").text(i18next.t('maillist.process_result_stat'));
	$(".i18n-maillist-process-result-info").text(i18next.t('maillist.process_result_info'));
	$(".i18n-maillist-process-result-file-name").text(i18next.t('maillist.process_result_file_name'));
	$(".i18n-maillist-process-result-virus-name").text(i18next.t('maillist.process_result_virus_name'));
	$(".i18n-maillist-process-result-virus-stat").text(i18next.t('maillist.process_result_virus_stat'));
	$(".i18n-maillist-process-result-cdr-stat").text(i18next.t('maillist.process_result_cdr_stat'));
	$(".i18n-maillist-process-result-cdr-detail").text(i18next.t('maillist.process_result_cdr_detail'));
	$(".i18n-maillist-process-result-cdr-image").text(i18next.t('maillist.process_result_cdr_image'));
	$(".i18n-maillist-process-result-issue").text(i18next.t('maillist.process_result_issue'));
	$(".i18n-maillist-process-result-block").text(i18next.t('maillist.process_result_block'));
	$(".i18n-maillist-process-result-pass").text(i18next.t('maillist.process_result_pass'));
	$(".i18n-maillist-process-result-crypt").text(i18next.t('maillist.process_result_crypt'));
	$(".i18n-maillist-original-eml-title").text(i18next.t('maillist.original_eml_title'));
	$(".i18n-maillist-detail-history").text(i18next.t('maillist.detail_history'));
	$(".i18n-maillist-detail-history-date").text(i18next.t('maillist.detail_history_date'));
	$(".i18n-maillist-detail-history-stat").text(i18next.t('maillist.detail_history_stat'));
	$(".i18n-maillist-detail-history-info").text(i18next.t('maillist.detail_history_info'));
	$(".i18n-maillist-detail-history-list-chk-spam").text(i18next.t('maillist.detail_history_list_chk_spam'));
	$(".i18n-maillist-detail-history-list-chk-spam").attr('title',i18next.t('maillist.detail_history_list_chk_spam'));
	$(".i18n-maillist-detail-history-list-chk-virus").text(i18next.t('maillist.detail_history_list_chk_virus'));
	$(".i18n-maillist-detail-history-list-chk-virus").attr('title',i18next.t('maillist.detail_history_list_chk_virus'));
	$(".i18n-maillist-detail-history-list-chk-cdr").text(i18next.t('maillist.detail_history_list_chk_cdr'));
	$(".i18n-maillist-detail-history-list-chk-cdr").attr('title',i18next.t('maillist.detail_history_list_chk_cdr'));
	$(".i18n-maillist-detail-history-list-pass").text(i18next.t('maillist.detail_history_list_pass'));
	$(".i18n-maillist-detail-history-virus-list-pass").text(i18next.t('maillist.detail_history_virus_list_pass'));
	$(".i18n-maillist-detail-history-list-block").text(i18next.t('maillist.detail_history_list_block'));
	$(".i18n-maillist-detail-history-list-delete").text(i18next.t('maillist.detail_history_list_delete'));
	$(".i18n-maillist-detail-history-list-disinfected").text(i18next.t('maillist.detail_history_list_disinfected'));
	$(".i18n-maillist-detail-history-list-infected").text(i18next.t('maillist.detail_history_list_infected'));
	$(".i18n-maillist-detail-history-list-suspected").text(i18next.t('maillist.detail_history_list_suspected'));
	$(".i18n-maillist-detail-history-list-spam-block").text(i18next.t('maillist.detail_history_list_spam'));
	$(".i18n-maillist-detail-history-list-drm").text(i18next.t('maillist.detail_history_list_drm'));
	$(".i18n-maillist-detail-history-cdr-list-pass").text(i18next.t('maillist.detail_history_cdr_list_pass'));
	$(".i18n-maillist-detail-history-cdr-list-unset").text(i18next.t('maillist.detail_history_cdr_list_unset'));
	
	$(".i18n-maillist-mail-tracking").text(i18next.t('maillist.mail_tracking'));
	$(".i18n-maillist-mail-tracking-title").attr('title',i18next.t('maillist.mail_tracking'));
	$(".i18n-maillist-mail-tracking-date").text(i18next.t('maillist.mail_tracking_date'));
	$(".i18n-maillist-mail-tracking-flag").text(i18next.t('maillist.mail_tracking_flag'));
	$(".i18n-maillist-mail-tracking-country").text(i18next.t('maillist.mail_tracking_country'));
	$(".i18n-maillist-mail-tracking-ip").text(i18next.t('maillist.mail_tracking_ip'));
	$(".i18n-maillist-file-detail-title").text(i18next.t('maillist.file_detail_title'));
	$(".i18n-maillist-file-detail-filename").text(i18next.t('maillist.file_detail_filename'));
	$(".i18n-maillist-file-detail-filesize").text(i18next.t('maillist.file_detail_filesize'));
	$(".i18n-maillist-file-detail-encode").text(i18next.t('maillist.file_detail_encode'));
	$(".i18n-maillist-file-detail-etc").text(i18next.t('maillist.file_detail_etc'));
	$(".i18n-maillist-mail-view").text(i18next.t('maillist.mail_view'));
	$(".i18n-maillist-mail-view-send").text(i18next.t('maillist.mail_view_send'));
	$(".i18n-maillist-mail-view-recv").text(i18next.t('maillist.mail_view_recv'));
	$(".i18n-maillist-mail-view-cc").text(i18next.t('maillist.mail_view_cc'));
	$(".i18n-maillist-mail-image-view").text(i18next.t('maillist.mail_image_view'));
	$(".i18n-maillist-mail-image-view-hidden").text(i18next.t('maillist.mail_image_view_hidden'));
	$(".i18n-maillist-mail-image-view-noti").text(i18next.t('maillist.mail_image_view_noti'));
	$(".i18n-maillist-mail-original-eml").text(i18next.t('maillist.mail_original_eml'));
	$(".i18n-maillist-mail-quarantine-eml").text(i18next.t('maillist.mail_quarantine_eml'));
	$(".i18n-maillist-mail-parse-type-file-send").text(i18next.t('maillist.mail_parse_type_file_send'));
	$(".i18n-maillist-mail-recver-mail-input").text(i18next.t('maillist.mail_recver_mail_input'));
	
	$(".i18n-maillist-mail-parse-type-body").text(i18next.t('maillist.mail_parse_type_body'));
	$(".i18n-maillist-mail-parse-type-cid").text(i18next.t('maillist.mail_parse_type_cid'));
	$(".i18n-maillist-mail-parse-type-html").text(i18next.t('maillist.mail_parse_type_html'));
	$(".i18n-maillist-mail-parse-type-text").text(i18next.t('maillist.mail_parse_type_text'));
	$(".i18n-maillist-mail-parse-type-attach").text(i18next.t('maillist.mail_parse_type_attach'));
	$(".i18n-maillist-mail-resend-noti").text(i18next.t('maillist.mail_resend_noti'));
	$(".i18n-maillist-mail-resend-noti2").text(i18next.t('maillist.mail_resend_noti2'));
	
	$(".i18n-maillist-sd-external-error-export-success").text(i18next.t('maillist.sd_external_error_export_success'));
	$(".i18n-maillist-sd-external-error-export-bypass-from-exceptlist").text(i18next.t('maillist.sd_external_error_export_bypass_from_exceptlist'));
	$(".i18n-maillist-sd-external-error-export-bypass-from-user-specific-exceptlist").text(i18next.t('maillist.sd_external_error_export_bypass_from_user_specific_exceptlist'));
	$(".i18n-maillist-sd-external-error-export-bypass-from-not-support-ext").text(i18next.t('maillist.sd_external_error_export_bypass_from_not_support_ext'));
	$(".i18n-maillist-sd-external-error-export-bypass-from-except-extension").text(i18next.t('maillist.sd_external_error_export_bypass_from_except_extension'));
	$(".i18n-maillist-sd-external-error-export-bypass-from-password-protected-ziparchive").text(i18next.t('maillist.sd_external_error_export_bypass_from_password_protected_ziparchive'));
	$(".i18n-maillist-sd-external-error-export-bypass-from-password-protected").text(i18next.t('maillist.sd_external_error_export_bypass_from_password_protected'));
	$(".i18n-maillist-sd-external-error-export-bypass-from-pe-limit-size").text(i18next.t('maillist.sd_external_error_export_bypass_from_pe_limit_size'));
	$(".i18n-maillist-sd-external-error-export-bypass-from-doc-limit-size").text(i18next.t('maillist.sd_external_error_export_bypass_from_doc_limit_size'));
	$(".i18n-maillist-sd-external-error-export-bypass-from-not-support-executable-archive").text(i18next.t('maillist.sd_external_error_export_bypass_from_not_support_executable_archive'));
	$(".i18n-maillist-sd-external-error-export-bypass-from-break-filename-encoding-in-zip").text(i18next.t('maillist.sd_external_error_export_bypass_from_break_filename_encoding_in_zip'));
	$(".i18n-maillist-sd-external-error-export-bypass-filetype-policy").text(i18next.t('maillist.sd_external_error_export_bypass_filetype_policy'));
	$(".i18n-maillist-sd-external-error-export-bypass-encryption-zip").text(i18next.t('maillist.sd_external_error_export_bypass_encryption_zip'));
	$(".i18n-maillist-sd-external-error-export-bypass-from-attached-html-file").text(i18next.t('maillist.sd_external_error_export_bypass_from_attached_html_file'));
	$(".i18n-maillist-sd-external-error-export-bypass-does-not-support-file-version").text(i18next.t('maillist.sd_external_error_export_bypass_does_not_support_file_version'));
	
	$(".i18n-maillist-sd-external-error-export-deny-from-blacklist").text(i18next.t('maillist.sd_external_error_export_deny_from_blacklist'));
	$(".i18n-maillist-sd-external-error-export-deny-from-user-specific-blacklist").text(i18next.t('maillist.sd_external_error_export_deny_from_user_specific_blacklist'));
	$(".i18n-maillist-sd-external-error-export-deny-from-not-support-ext").text(i18next.t('maillist.sd_external_error_export_deny_from_not_support_ext'));
	$(".i18n-maillist-sd-external-error-export-deny-from-password-protected-ziparchive").text(i18next.t('maillist.sd_external_error_export_deny_from_password_protected_ziparchive'));
	$(".i18n-maillist-sd-external-error-export-deny-from-invalid-password-archive").text(i18next.t('maillist.sd_external_error_export_deny_from_invalid_password_archive'));
	$(".i18n-maillist-sd-external-error-export-deny-from-password-protected").text(i18next.t('maillist.sd_external_error_export_deny_from_password_protected'));
	$(".i18n-maillist-sd-external-error-export-deny-from-invalid-password-doc").text(i18next.t('maillist.sd_external_error_export_deny_from_invalid_password_doc'));
	$(".i18n-maillist-sd-external-error-export-deny-from-pe-limit-size").text(i18next.t('maillist.sd_external_error_export_deny_from_pe_limit_size'));
	$(".i18n-maillist-sd-external-error-export-deny-from-doc-limit-size").text(i18next.t('maillist.sd_external_error_export_deny_from_doc_limit_size'));
	$(".i18n-maillist-sd-external-error-export-deny-from-not-support-executable-archive").text(i18next.t('maillist.sd_external_error_export_deny_from_not_support_executable_archive'));
	$(".i18n-maillist-sd-external-error-export-deny-from-break-filename-encoding-in-zip").text(i18next.t('maillist.sd_external_error_export_deny_from_break_filename_encoding_in_zip'));
	$(".i18n-maillist-sd-external-error-export-deny-from-file-length-limit").text(i18next.t('maillist.sd_external_error_export_deny_from_file_length_limit'));
	$(".i18n-maillist-sd-external-error-export-deny-from-n-files-over-in-zip").text(i18next.t('maillist.sd_external_error_export_deny_from_n_files_over_in_zip'));
	$(".i18n-maillist-sd-external-error-export-deny-from-attached-html-file").text(i18next.t('maillist.sd_external_error_export_deny_from_attached_html_file'));
	$(".i18n-maillist-sd-external-error-export-suspect-apt-hwp-file").text(i18next.t('maillist.sd_external_error_export_suspect_apt_hwp_file'));
	$(".i18n-maillist-sd-external-error-export-suspect-apt-office-file").text(i18next.t('maillist.sd_external_error_export_suspect_apt_office_file'));
	$(".i18n-maillist-sd-external-error-does-not-support-executable-archive").text(i18next.t('maillist.sd_external_error_does_not_support_executable_archive'));
	$(".i18n-maillist-sd-external-error-modified-file-extension-type-1").text(i18next.t('maillist.sd_external_error_modified_file_extension_type_1'));
	$(".i18n-maillist-sd-external-error-modified-file-extension-type-2").text(i18next.t('maillist.sd_external_error_modified_file_extension_type_2'));
	$(".i18n-maillist-sd-external-error-export-deny-from-pe-in-zip-mnd-only").text(i18next.t('maillist.sd_external_error_export_deny_from_pe_in_zip_mnd_only'));
	$(".i18n-maillist-sd-external-error-export-deny-from-0-files-in-zip").text(i18next.t('maillist.sd_external_error_export_deny_from_0_files_in_zip'));
	$(".i18n-maillist-sd-external-error-force-encryption-failed").text(i18next.t('maillist.sd_external_error_force_encryption_failed'));
	$(".i18n-maillist-sd-external-error-does-not-support-file-extension-from-ds-localset").text(i18next.t('maillist.sd_external_error_does_not_support_file_extension_from_ds_localset'));
	$(".i18n-maillist-sd-external-error-bad-casting").text(i18next.t('maillist.sd_external_error_bad_casting'));
	$(".i18n-maillist-sd-external-error-invalid-options").text(i18next.t('maillist.sd_external_error_invalid_options'));
	$(".i18n-maillist-sd-external-error-invalid-header-from-options").text(i18next.t('maillist.sd_external_error_invalid_header_from_options'));
	$(".i18n-maillist-sd-external-error-make-stup-failed").text(i18next.t('maillist.sd_external_error_make_stup_failed'));
	$(".i18n-maillist-sd-external-error-copy-file-failed").text(i18next.t('maillist.sd_external_error_copy_file_failed'));
	$(".i18n-maillist-sd-external-error-move-file-failed").text(i18next.t('maillist.sd_external_error_move_file_failed'));
	$(".i18n-maillist-sd-external-error-create-vrf-temp-failed").text(i18next.t('maillist.sd_external_error_create_vrf_temp_failed'));
	$(".i18n-maillist-sd-external-error-string-format-failed").text(i18next.t('maillist.sd_external_error_string_format_failed'));
	$(".i18n-maillist-sd-external-error-invalid-file-from-archive").text(i18next.t('maillist.sd_external_error_invalid_file_from_archive'));
	$(".i18n-maillist-sd-external-error-load-library-failed").text(i18next.t('maillist.sd_external_error_load_library_failed'));
	$(".i18n-maillist-sd-external-error-file-does-not-exist").text(i18next.t('maillist.sd_external_error_file_does_not_exist'));
	$(".i18n-maillist-sd-external-error-exploit-detected").text(i18next.t('maillist.sd_external_error_exploit_detected'));
	$(".i18n-maillist-sd-external-error-aspose-slides-undefined").text(i18next.t('maillist.sd_external_error_aspose_slides_undefined'));
	$(".i18n-maillist-sd-external-error-aspose-words-undefined").text(i18next.t('maillist.sd_external_error_aspose_words_undefined'));
	$(".i18n-maillist-sd-external-error-aspose-cells-undefined").text(i18next.t('maillist.sd_external_error_aspose_cells_undefined'));
	$(".i18n-maillist-sd-external-error-aspose-images-loading-failed").text(i18next.t('maillist.sd_external_error_aspose_images_loading_failed'));
	$(".i18n-maillist-sd-external-error-aspose-pdf-undefined").text(i18next.t('maillist.sd_external_error_aspose_pdf_undefined'));
	$(".i18n-maillist-sd-external-error-aspose-eml-attachment-extract-fail").text(i18next.t('maillist.sd_external_error_aspose_eml_attachment_extract_fail'));
	$(".i18n-maillist-sd-external-error-aspose-eml-attachment-assemble-fail").text(i18next.t('maillist.sd_external_error_aspose_eml_attachment_assemble_fail'));
	$(".i18n-maillist-sd-external-error-cad-convert-fail").text(i18next.t('maillist.sd_external_error_cad_convert_fail'));
	$(".i18n-maillist-sd-external-error-html-python-routine-failed").text(i18next.t('maillist.sd_external_error_html_python_routine_failed'));
	$(".i18n-maillist-sd-external-error-ichitaro-converting-failed").text(i18next.t('maillist.sd_external_error_ichitaro_converting_failed'));
	$(".i18n-maillist-sd-external-error-ichitaro-python-socket-failed").text(i18next.t('maillist.sd_external_error_ichitaro_python_socket_failed'));
	$(".i18n-maillist-sd-external-error-text-reassemble-failed").text(i18next.t('maillist.sd_external_error_text_reassemble_failed'));
	$(".i18n-maillist-sd-external-error-e-outofmemory").text(i18next.t('maillist.sd_external_error_e_outofmemory'));
	$(".i18n-maillist-sd-external-error-e-abort").text(i18next.t('maillist.sd_external_error_e_abort'));
	$(".i18n-maillist-sd-external-error-e-nointerface").text(i18next.t('maillist.sd_external_error_e_nointerface'));
	$(".i18n-maillist-sd-external-error-e-invalidarg").text(i18next.t('maillist.sd_external_error_e_invalidarg'));
	$(".i18n-maillist-sd-external-error-e-unexpected").text(i18next.t('maillist.sd_external_error_e_unexpected'));
	$(".i18n-maillist-sd-external-error-e-filesize-0").text(i18next.t('maillist.sd_external_error_e_filesize_0'));
	$(".i18n-maillist-sd-external-error-aspose-slides-check-macro").text(i18next.t('maillist.sd_external_error_aspose_slides_check_macro'));
	$(".i18n-maillist-sd-external-error-aspose-cells-check-macro").text(i18next.t('maillist.sd_external_error_aspose_cells_check_macro'));
	$(".i18n-maillist-sd-external-error-aspose-words-check-macro").text(i18next.t('maillist.sd_external_error_aspose_words_check_macro'));
	$(".i18n-maillist-sd-external-error-does-not-support-file-version").text(i18next.t('maillist.sd_external_error_does_not_support_file_version'));
	$(".i18n-maillist-sd-external-error-zip-extract-fail-export-deny").text(i18next.t('maillist.sd_external_error_zip_extract_fail_export_deny'));
	$(".i18n-maillist-sd-external-error-modified-file-extension-type-3").text(i18next.t('maillist.sd_external_error_modified_file_extension_type_3'));
	
	//eventlist
	$(".i18n-eventlist-help").text(i18next.t('eventlist.help'));
	$(".i18n-eventlist-location-1depth").text(i18next.t('eventlist.location_1depth'));
	$(".i18n-eventlist-location-2depth").text(i18next.t('eventlist.location_2depth'));
	$(".i18n-eventlist-total").text(i18next.t('eventlist.total'));
	$(".i18n-eventlist-count").text(i18next.t('eventlist.count'));
	$(".i18n-eventlist-select-option-all").text(i18next.t('eventlist.select_option_all'));
	$(".i18n-eventlist-select-option-id").text(i18next.t('eventlist.select_option_id'));
	$(".i18n-eventlist-select-option-ip").text(i18next.t('eventlist.select_option_ip'));
	$(".i18n-eventlist-select-option-desc").text(i18next.t('eventlist.select_option_desc'));
	$(".i18n-eventlist-list-time").text(i18next.t('eventlist.list_time'));
	$(".i18n-eventlist-list-id").text(i18next.t('eventlist.list_id'));
	$(".i18n-eventlist-list-ip").text(i18next.t('eventlist.list_ip'));
	$(".i18n-eventlist-list-content").text(i18next.t('eventlist.list_content'));
	$(".i18n-eventlist-list-desc").text(i18next.t('eventlist.list_desc'));
	$(".i18n-eventlist-filter").text(i18next.t('eventlist.filter'));
	$(".i18n-eventlist-filter-option-all").text(i18next.t('eventlist.filter_option_all'));
	$(".i18n-eventlist-filter-option-error").text(i18next.t('eventlist.filter_option_error'));
	$(".i18n-eventlist-filter-option-login").text(i18next.t('eventlist.filter_option_login'));
	$(".i18n-eventlist-filter-option-mailitem").text(i18next.t('eventlist.filter_option_mailitem'));
	$(".i18n-eventlist-filter-option-svc").text(i18next.t('eventlist.filter_option_svc'));
	$(".i18n-eventlist-filter-option-log").text(i18next.t('eventlist.filter_option_log'));
	$(".i18n-eventlist-filter-option-config").text(i18next.t('eventlist.filter_option_config'));
	$(".i18n-eventlist-filter-option-add").text(i18next.t('eventlist.filter_option_add'));
	$(".i18n-eventlist-filter-option-del").text(i18next.t('eventlist.filter_option_del'));
	$(".i18n-eventlist-filter-option-modify").text(i18next.t('eventlist.filter_option_modify'));
	
	//servicelist
	$(".i18n-servicelist-help").text(i18next.t('servicelist.help'));
	$(".i18n-servicelist-location-1depth").text(i18next.t('servicelist.location_1depth'));
	$(".i18n-servicelist-location-2depth").text(i18next.t('servicelist.location_2depth'));
	$(".i18n-servicelist-seg-smtp").text(i18next.t('servicelist.seg_smtp'));
	$(".i18n-servicelist-seg-smtp-start").text(i18next.t('servicelist.seg_smtp_start'));
	$(".i18n-servicelist-seg-cron").text(i18next.t('servicelist.seg_cron'));
	$(".i18n-servicelist-seg-cron-start").text(i18next.t('servicelist.seg_cron_start'));
	$(".i18n-servicelist-seg-spam").text(i18next.t('servicelist.seg_spam'));
	$(".i18n-servicelist-seg-spam-start").text(i18next.t('servicelist.seg_spam_start'));
	$(".i18n-servicelist-seg-virus").text(i18next.t('servicelist.seg_virus'));
	$(".i18n-servicelist-seg-virus-start").text(i18next.t('servicelist.seg_virus_start'));
	$(".i18n-servicelist-seg-cdr").text(i18next.t('servicelist.seg_cdr'));
	$(".i18n-servicelist-seg-cdr-start").text(i18next.t('servicelist.seg_cdr_start'));
	
	//logmoniter
	$(".i18n-logmoniter-help").text(i18next.t('logmoniter.help'));
	$(".i18n-logmoniter-location-1depth").text(i18next.t('logmoniter.location_1depth'));
	$(".i18n-logmoniter-location-2depth").text(i18next.t('logmoniter.location_2depth'));
	$(".i18n-logmoniter-total").text(i18next.t('logmoniter.total'));
	$(".i18n-logmoniter-count").text(i18next.t('logmoniter.count'));
	$(".i18n-logmoniter-log-type").text(i18next.t('logmoniter.log_type'));
	$(".i18n-logmoniter-log-list-modify-time").text(i18next.t('logmoniter.log_list_modify_time'));
	$(".i18n-logmoniter-log-list-filename").text(i18next.t('logmoniter.log_list_filename'));
	$(".i18n-logmoniter-log-list-filesize").text(i18next.t('logmoniter.log_list_filesize'));
	$(".i18n-logmoniter-log-list-down").text(i18next.t('logmoniter.log_list_down'));

	//queuelist
	$(".i18n-queuelist-help").text(i18next.t('queuelist.help'));
	$(".i18n-queuelist-location-1depth").text(i18next.t('queuelist.location_1depth'));
	$(".i18n-queuelist-location-2depth").text(i18next.t('queuelist.location_2depth'));
	$(".i18n-queuelist-equipment1").text(i18next.t('queuelist.equipment1'));
	$(".i18n-queuelist-equipment2").text(i18next.t('queuelist.equipment2'));
	$(".i18n-queuelist-queue-list-folder").text(i18next.t('queuelist.queue_list_folder'));
	$(".i18n-queuelist-queue-list-normal-count").text(i18next.t('queuelist.queue_list_normal_count'));
	$(".i18n-queuelist-queue-list-queue-count").text(i18next.t('queuelist.queue_list_queue_count'));
	$(".i18n-queuelist-queue-list-queue-time").text(i18next.t('queuelist.queue_list_queue_time'));
	$(".i18n-queuelist-queue-list-desc").text(i18next.t('queuelist.queue_list_desc'));
	$(".i18n-queuelist-queue-modal-title").text(i18next.t('queuelist.queue_modal_title'));
	$(".i18n-queuelist-queue-modal-sub-dt-title1").text(i18next.t('queuelist.queue_modal_sub_dt_title1'));
	$(".i18n-queuelist-queue-modal-sub-dt-title2").text(i18next.t('queuelist.queue_modal_sub_dt_title2'));
	$(".i18n-queuelist-queue-modal-dt-list-file").text(i18next.t('queuelist.queue_modal_dt_list_file'));
	$(".i18n-queuelist-queue-modal-dt-list-size").text(i18next.t('queuelist.queue_modal_dt_list_size'));
	$(".i18n-queuelist-queue-modal-dt-list-time").text(i18next.t('queuelist.queue_modal_dt_list_time'));
	$(".i18n-queuelist-queue-modal-sub-nm-title1").text(i18next.t('queuelist.queue_modal_sub_nm_title1'));
	$(".i18n-queuelist-queue-modal-sub-nm-title2").text(i18next.t('queuelist.queue_modal_sub_nm_title2'));
	$(".i18n-queuelist-queue-modal-nm-list-file").text(i18next.t('queuelist.queue_modal_nm_list_file'));
	$(".i18n-queuelist-queue-modal-nm-list-size").text(i18next.t('queuelist.queue_modal_nm_list_size'));
	$(".i18n-queuelist-queue-modal-nm-list-time").text(i18next.t('queuelist.queue_modal_nm_list_time'));
	$(".i18n-queuelist-queue-modal-list-etc").text(i18next.t('queuelist.queue_modal_list_etc'));
	$(".i18n-queuelist-queue-list-detail-btn").text(i18next.t('queuelist.queue_list_detail_btn'));
	$(".i18n-queuelist-queue-modal-detail-title").text(i18next.t('queuelist.queue_modal_detail_title'));
	$(".i18n-queuelist-queue-modal-detail-title2").text(i18next.t('queuelist.queue_modal_detail_title2'));
	$(".i18n-queuelist-queue-modal-detail-list-time").text(i18next.t('queuelist.queue_modal_detail_list_time'));
	$(".i18n-queuelist-queue-modal-detail-list-ip").text(i18next.t('queuelist.queue_modal_detail_list_ip'));
	$(".i18n-queuelist-queue-modal-detail-list-sender").text(i18next.t('queuelist.queue_modal_detail_list_sender'));
	$(".i18n-queuelist-queue-modal-detail-list-recver").text(i18next.t('queuelist.queue_modal_detail_list_recver'));
	$(".i18n-queuelist-queue-modal-detail-list-result").text(i18next.t('queuelist.queue_modal_detail_list_result'));
	$(".i18n-queuelist-queue-modal-detail-list-detail-info").text(i18next.t('queuelist.queue_modal_detail_list_detail_info'));
	$(".i18n-queuelist-close").text(i18next.t('queuelist.close'));
	$(".i18n-queuelist-queue-mail").text(i18next.t('queuelist.queue_mail'));
	$(".i18n-queuelist-queue-seg-in").text(i18next.t('queuelist.queue_seg_in'));
	$(".i18n-queuelist-queue-seg-out").text(i18next.t('queuelist.queue_seg_out'));
	
	//systemMoniter
	$(".i18n-systemMoniter-help").text(i18next.t('systemMoniter.help'));
	$(".i18n-systemMoniter-location-1depth").text(i18next.t('systemMoniter.location_1depth'));
	$(".i18n-systemMoniter-location-2depth").text(i18next.t('systemMoniter.location_2depth'));
	$(".i18n-systemMoniter-equipment1").text(i18next.t('systemMoniter.equipment1'));
	$(".i18n-systemMoniter-equipment2").text(i18next.t('systemMoniter.equipment2'));
	$(".i18n-systemMoniter-graph-network").text(i18next.t('systemMoniter.graph_network'));
	$(".i18n-systemMoniter-graph-cpu").text(i18next.t('systemMoniter.graph_cpu'));
	$(".i18n-systemMoniter-graph-disk").text(i18next.t('systemMoniter.graph_disk'));
	$(".i18n-systemMoniter-graph-memory").text(i18next.t('systemMoniter.graph_memory'));
	$(".i18n-systemMoniter-graph-daily").text(i18next.t('systemMoniter.graph_daily'));
	$(".i18n-systemMoniter-graph-weekly").text(i18next.t('systemMoniter.graph_weekly'));
	$(".i18n-systemMoniter-graph-monthly").text(i18next.t('systemMoniter.graph_monthly'));
	$(".i18n-systemMoniter-graph-yearly").text(i18next.t('systemMoniter.graph_yearly'));
	$(".i18n-systemMoniter-select-button-help").text(i18next.t('systemMoniter.select_button_help'));
	
	//statistics
	$(".i18n-statistics-help").text(i18next.t('statistics.help'));
	$(".i18n-statistics-location-1depth").text(i18next.t('statistics.location_1depth'));
	$(".i18n-statistics-location-2depth").text(i18next.t('statistics.location_2depth'));
	$(".i18n-statistics-tab-all").text(i18next.t('statistics.tab_all'));
	$(".i18n-statistics-tab-spam").text(i18next.t('statistics.tab_spam'));
	$(".i18n-statistics-tab-virus").text(i18next.t('statistics.tab_virus'));
	$(".i18n-statistics-tab-cdr").text(i18next.t('statistics.tab_cdr'));
	$(".i18n-statistics-tab-normal").text(i18next.t('statistics.tab_normal'));
	$(".i18n-statistics-tab-final").text(i18next.t('statistics.tab_final'));
	$(".i18n-statistics-tab-rank").text(i18next.t('statistics.tab_rank'));
	$(".i18n-statistics-tab-rank-help").text(i18next.t('statistics.tab_rank_help'));
	$(".i18n-statistics-tab-all-total").text(i18next.t('statistics.tab_all_total'));
	$(".i18n-statistics-tab-all-count").text(i18next.t('statistics.tab_all_count'));
	$(".i18n-statistics-tab-all-select-all-domain").text(i18next.t('statistics.tab_all_select_all_domain'));
	$(".i18n-statistics-tab-all-period-week").text(i18next.t('statistics.tab_all_period_week'));
	$(".i18n-statistics-tab-all-period-month").text(i18next.t('statistics.tab_all_period_month'));
	$(".i18n-statistics-tab-all-period-custom").text(i18next.t('statistics.tab_all_period_custom'));
	$(".i18n-statistics-tab-all-graph-title").attr('title',i18next.t('statistics.tab_all_graph_title'));
	$(".i18n-statistics-tab-all-list-date").text(i18next.t('statistics.tab_all_list_date'));
	$(".i18n-statistics-tab-all-list-mail-status").text(i18next.t('statistics.tab_all_list_mail_status'));
	$(".i18n-statistics-tab-all-list-filter").text(i18next.t('statistics.tab_ali_list_filter'));
	$(".i18n-statistics-tab-all-list-th-mail-status-send").text(i18next.t('statistics.tab_all_list_th_mail_status_send'));
	$(".i18n-statistics-tab-all-list-th-mail-status-recv").text(i18next.t('statistics.tab_all_list_th_mail_status_recv'));
	$(".i18n-statistics-tab-all-list-th-mail-status-rs").text(i18next.t('statistics.tab_all_list_th_mail_status_rs'));
	$(".i18n-statistics-tab-all-list-th-mail-status-relay").text(i18next.t('statistics.tab_all_list_th_mail_status_relay'));
	$(".i18n-statistics-tab-all-list-th-mail-status-mirror").text(i18next.t('statistics.tab_all_list_th_mail_status_mirror'));
	$(".i18n-statistics-tab-all-list-th-mail-status-total").text(i18next.t('statistics.tab_all_list_th_mail_status_total'));
	$(".i18n-statistics-tab-all-list-th-filter-spam").text(i18next.t('statistics.tab_all_list_th_filter_spam'));
	$(".i18n-statistics-tab-all-list-th-filter-virus").text(i18next.t('statistics.tab_all_list_th_filter_virus'));
	$(".i18n-statistics-tab-all-list-th-filter-cdr").text(i18next.t('statistics.tab_all_list_th_filter_cdr'));
	$(".i18n-statistics-tab-all-list-th-total-send").text(i18next.t('statistics.tab_all_list_th_total_send'));
	$(".i18n-statistics-tab-all-list-th-total-recv").text(i18next.t('statistics.tab_all_list_th_total_recv'));
	$(".i18n-statistics-tab-all-list-th-total-rs").text(i18next.t('statistics.tab_all_list_th_total_rs'));
	$(".i18n-statistics-tab-all-list-th-total-relay").text(i18next.t('statistics.tab_all_list_th_total_relay'));
	$(".i18n-statistics-tab-all-list-th-normal-send").text(i18next.t('statistics.tab_all_list_th_normal_send'));
	$(".i18n-statistics-tab-all-list-th-normal-recv").text(i18next.t('statistics.tab_all_list_th_normal_recv'));
	$(".i18n-statistics-tab-all-list-th-normal-rs").text(i18next.t('statistics.tab_all_list_th_normal_rs'));
	$(".i18n-statistics-tab-all-list-th-normal-relay").text(i18next.t('statistics.tab_all_list_th_normal_relay'));
	$(".i18n-statistics-tab-all-list-th-normal-mirror").text(i18next.t('statistics.tab_all_list_th_normal_mirror'));
	$(".i18n-statistics-tab-all-list-th-status-sendErr").text(i18next.t('statistics.tab_all_list_th_status_sendErr'));
	$(".i18n-statistics-tab-all-list-th-status-recvErr").text(i18next.t('statistics.tab_all_list_th_status_recvErr'));
	$(".i18n-statistics-tab-all-list-th-status-relayErr").text(i18next.t('statistics.tab_all_list_th_status_relayErr'));
	$(".i18n-statistics-tab-all-list-th-status-deliveryErr").text(i18next.t('statistics.tab_all_list_th_status_deliveryErr'));
	$(".i18n-statistics-tab-all-list-th-spam-send").text(i18next.t('statistics.tab_all_list_th_spam_send'));
	$(".i18n-statistics-tab-all-list-th-spam-recv").text(i18next.t('statistics.tab_all_list_th_spam_recv'));
	$(".i18n-statistics-tab-all-list-th-virus-send").text(i18next.t('statistics.tab_all_list_th_virus_send'));
	$(".i18n-statistics-tab-all-list-th-virus-recv").text(i18next.t('statistics.tab_all_list_th_virus_recv'));
	$(".i18n-statistics-tab-all-list-th-cdr-send").text(i18next.t('statistics.tab_all_list_th_cdr_send'));
	$(".i18n-statistics-tab-all-list-th-cdr-recv").text(i18next.t('statistics.tab_all_list_th_cdr_recv'));
	$(".i18n-statistics-tab-all-sender-top5").text(i18next.t('statistics.tab_all_sender_top5'));
	$(".i18n-statistics-tab-all-sender-no").text(i18next.t('statistics.tab_all_sender_no'));
	$(".i18n-statistics-tab-all-sender-title").text(i18next.t('statistics.tab_all_sender_title'));
	$(".i18n-statistics-tab-all-sender-count").text(i18next.t('statistics.tab_all_sender_count'));
	$(".i18n-statistics-tab-all-recver-top5").text(i18next.t('statistics.tab_all_recver_top5'));
	$(".i18n-statistics-tab-all-recver-no").text(i18next.t('statistics.tab_all_recver_no'));
	$(".i18n-statistics-tab-all-recver-title").text(i18next.t('statistics.tab_all_recver_title'));
	$(".i18n-statistics-tab-all-recver-count").text(i18next.t('statistics.tab_all_recver_count'));
	$(".i18n-statistics-tab-all-sender-domain-top5").text(i18next.t('statistics.tab_all_sender_domain_top5'));
	$(".i18n-statistics-tab-all-sender-domain-no").text(i18next.t('statistics.tab_all_sender_domain_no'));
	$(".i18n-statistics-tab-all-sender-domain-title").text(i18next.t('statistics.tab_all_sender_domain_title'));
	$(".i18n-statistics-tab-all-sender-domain-count").text(i18next.t('statistics.tab_all_sender_domain_count'));
	$(".i18n-statistics-tab-all-recver-domain-top5").text(i18next.t('statistics.tab_all_recver_domain_top5'));
	$(".i18n-statistics-tab-all-recver-domain-no").text(i18next.t('statistics.tab_all_recver_domain_no'));
	$(".i18n-statistics-tab-all-recver-domain-title").text(i18next.t('statistics.tab_all_recver_domain_title'));
	$(".i18n-statistics-tab-all-recver-domain-count").text(i18next.t('statistics.tab_all_recver_domain_count'));
	$(".i18n-statistics-tab-all-sender-country-top5").text(i18next.t('statistics.tab_all_sender_country_top5'));
	$(".i18n-statistics-tab-all-sender-country-no").text(i18next.t('statistics.tab_all_sender_country_no'));
	$(".i18n-statistics-tab-all-sender-country-title").text(i18next.t('statistics.tab_all_sender_country_title'));
	$(".i18n-statistics-tab-all-sender-country-count").text(i18next.t('statistics.tab_all_sender_country_count'));
	$(".i18n-statistics-tab-spam-total").text(i18next.t('statistics.tab_spam_total'));
	$(".i18n-statistics-tab-spam-count").text(i18next.t('statistics.tab_spam_count'));
	$(".i18n-statistics-tab-spam-select-all-domain").text(i18next.t('statistics.tab_spam_select_all_domain'));
	$(".i18n-statistics-tab-spam-period-week").text(i18next.t('statistics.tab_spam_period_week'));
	$(".i18n-statistics-tab-spam-period-month").text(i18next.t('statistics.tab_spam_period_month'));
	$(".i18n-statistics-tab-spam-period-custom").text(i18next.t('statistics.tab_spam_period_custom'));
	$(".i18n-statistics-tab-spam-graph-title").attr('title',i18next.t('statistics.tab_spam_graph_title'));
	$(".i18n-statistics-tab-spam-filter-all").text(i18next.t('statistics.tab_spam_filter_all'));
	$(".i18n-statistics-tab-spam-filter-send").text(i18next.t('statistics.tab_spam_filter_send'));
	$(".i18n-statistics-tab-spam-filter-recv").text(i18next.t('statistics.tab_spam_filter_recv'));
	$(".i18n-statistics-tab-spam-filter-rs").text(i18next.t('statistics.tab_spam_filter_rs'));
	$(".i18n-statistics-tab-spam-filter-relay").text(i18next.t('statistics.tab_spam_filter_relay'));
	$(".i18n-statistics-tab-spam-list-date").text(i18next.t('statistics.tab_spam_list_date'));
	$(".i18n-statistics-tab-spam-list-sdr").text(i18next.t('statistics.tab_spam_list_sdr'));
	$(".i18n-statistics-tab-spam-list-rdr").text(i18next.t('statistics.tab_spam_list_rdr'));
	$(".i18n-statistics-tab-spam-list-hdr").text(i18next.t('statistics.tab_spam_list_hdr'));
	$(".i18n-statistics-tab-spam-list-spf").text(i18next.t('statistics.tab_spam_list_spf'));
	$(".i18n-statistics-tab-spam-list-rbl").text(i18next.t('statistics.tab_spam_list_rbl'));
	$(".i18n-statistics-tab-spam-list-send-block").text(i18next.t('statistics.tab_spam_list_send_block'));
	$(".i18n-statistics-tab-spam-list-recv-block").text(i18next.t('statistics.tab_spam_list_recv_block'));
	$(".i18n-statistics-tab-spam-list-msg-size").text(i18next.t('statistics.tab_spam_list_msg_size'));
	$(".i18n-statistics-tab-spam-list-limit-server").text(i18next.t('statistics.tab_spam_list_limit_server'));
	$(".i18n-statistics-tab-spam-list-pattern-filter").text(i18next.t('statistics.tab_spam_list_pattern_filter'));
	$(".i18n-statistics-tab-spam-list-content-filter").text(i18next.t('statistics.tab_spam_list_content_filter'));
	$(".i18n-statistics-tab-spam-list-limit-recv").text(i18next.t('statistics.tab_spam_list_limit_recv'));
	$(".i18n-statistics-tab-spam-list-exception").text(i18next.t('statistics.tab_spam_list_exception'));
	$(".i18n-statistics-tab-spam-list-reject").text(i18next.t('statistics.tab_spam_list_reject'));
	$(".i18n-statistics-tab-spam-graph-tag").text(i18next.t('statistics.tab_spam_graph_tag'));
	$(".i18n-statistics-tab-spam-country-top5").text(i18next.t('statistics.tab_spam_country_top5'));
	$(".i18n-statistics-tab-spam-country-no").text(i18next.t('statistics.tab_spam_country_no'));
	$(".i18n-statistics-tab-spam-country-title").text(i18next.t('statistics.tab_spam_country_title'));
	$(".i18n-statistics-tab-spam-country-count").text(i18next.t('statistics.tab_spam_country_count'));
	$(".i18n-statistics-tab-spam-type-top5").text(i18next.t('statistics.tab_spam_type_top5'));
	$(".i18n-statistics-tab-spam-type-no").text(i18next.t('statistics.tab_spam_type_no'));
	$(".i18n-statistics-tab-spam-type-title").text(i18next.t('statistics.tab_spam_type_title'));
	$(".i18n-statistics-tab-spam-type-count").text(i18next.t('statistics.tab_spam_type_count'));
	$(".i18n-statistics-tab-spam-filter-top5").text(i18next.t('statistics.tab_spam_filter_top5'));
	$(".i18n-statistics-tab-spam-filter-no").text(i18next.t('statistics.tab_spam_filter_no'));
	$(".i18n-statistics-tab-spam-filter-title").text(i18next.t('statistics.tab_spam_filter_title'));
	$(".i18n-statistics-tab-spam-filter-count").text(i18next.t('statistics.tab_spam_filter_count'));
	$(".i18n-statistics-tab-spam-ip-top5").text(i18next.t('statistics.tab_spam_ip_top5'));
	$(".i18n-statistics-tab-spam-ip-no").text(i18next.t('statistics.tab_spam_ip_no'));
	$(".i18n-statistics-tab-spam-ip-title").text(i18next.t('statistics.tab_spam_ip_title'));
	$(".i18n-statistics-tab-spam-ip-count").text(i18next.t('statistics.tab_spam_ip_count'));
	$(".i18n-statistics-tab-virus-total").text(i18next.t('statistics.tab_virus_total'));
	$(".i18n-statistics-tab-virus-count").text(i18next.t('statistics.tab_virus_count'));
	$(".i18n-statistics-tab-virus-select-all-domain").text(i18next.t('statistics.tab_virus_select_all_domain'));
	$(".i18n-statistics-tab-virus-period-week").text(i18next.t('statistics.tab_virus_period_week'));
	$(".i18n-statistics-tab-virus-period-month").text(i18next.t('statistics.tab_virus_period_month'));
	$(".i18n-statistics-tab-virus-period-custom").text(i18next.t('statistics.tab_virus_period_custom'));
	$(".i18n-statistics-tab-virus-graph-title").attr('title',i18next.t('statistics.tab_virus_graph_title'));
	$(".i18n-statistics-tab-virus-list-date").text(i18next.t('statistics.tab_virus_list_date'));
	$(".i18n-statistics-tab-virus-list-send").text(i18next.t('statistics.tab_virus_list_send'));
	$(".i18n-statistics-tab-virus-list-recv").text(i18next.t('statistics.tab_virus_list_recv'));
	$(".i18n-statistics-tab-virus-list-rs").text(i18next.t('statistics.tab_virus_list_rs'));
	$(".i18n-statistics-tab-virus-list-relay").text(i18next.t('statistics.tab_virus_list_relay'));
	$(".i18n-statistics-tab-virus-list-total").text(i18next.t('statistics.tab_virus_list_total'));
	$(".i18n-statistics-tab-virus-sender-top5").text(i18next.t('statistics.tab_virus_sender_top5'));
	$(".i18n-statistics-tab-virus-sender-no").text(i18next.t('statistics.tab_virus_sender_no'));
	$(".i18n-statistics-tab-virus-sender-title").text(i18next.t('statistics.tab_virus_sender_title'));
	$(".i18n-statistics-tab-virus-sender-count").text(i18next.t('statistics.tab_virus_sender_count'));
	$(".i18n-statistics-tab-virus-recver-top5").text(i18next.t('statistics.tab_virus_recver_top5'));
	$(".i18n-statistics-tab-virus-recver-no").text(i18next.t('statistics.tab_virus_recver_no'));
	$(".i18n-statistics-tab-virus-recver-title").text(i18next.t('statistics.tab_virus_recver_title'));
	$(".i18n-statistics-tab-virus-recver-count").text(i18next.t('statistics.tab_virus_recver_count'));
	$(".i18n-statistics-tab-virus-malignity-top5").text(i18next.t('statistics.tab_virus_malignity_top5'));
	$(".i18n-statistics-tab-virus-malignity-no").text(i18next.t('statistics.tab_virus_malignity_no'));
	$(".i18n-statistics-tab-virus-malignity-title").text(i18next.t('statistics.tab_virus_malignity_title'));
	$(".i18n-statistics-tab-virus-malignity-count").text(i18next.t('statistics.tab_virus_malignity_count'));
	$(".i18n-statistics-tab-virus-type-top5").text(i18next.t('statistics.tab_virus_type_top5'));
	$(".i18n-statistics-tab-virus-type-no").text(i18next.t('statistics.tab_virus_type_no'));
	$(".i18n-statistics-tab-virus-type-title").text(i18next.t('statistics.tab_virus_type_title'));
	$(".i18n-statistics-tab-virus-type-count").text(i18next.t('statistics.tab_virus_type_count'));
	$(".i18n-statistics-tab-cdr-total").text(i18next.t('statistics.tab_cdr_total'));
	$(".i18n-statistics-tab-cdr-count").text(i18next.t('statistics.tab_cdr_count'));
	$(".i18n-statistics-tab-cdr-select-all-domain").text(i18next.t('statistics.tab_cdr_select_all_domain'));
	$(".i18n-statistics-tab-cdr-period-week").text(i18next.t('statistics.tab_cdr_period_week'));
	$(".i18n-statistics-tab-cdr-period-month").text(i18next.t('statistics.tab_cdr_period_month'));
	$(".i18n-statistics-tab-cdr-period-custom").text(i18next.t('statistics.tab_cdr_period_custom'));
	$(".i18n-statistics-tab-cdr-graph-title").attr('title',i18next.t('statistics.tab_cdr_graph_title'));
	$(".i18n-statistics-tab-cdr-list-date").text(i18next.t('statistics.tab_cdr_list_date'));
	$(".i18n-statistics-tab-cdr-list-send").text(i18next.t('statistics.tab_cdr_list_send'));
	$(".i18n-statistics-tab-cdr-list-recv").text(i18next.t('statistics.tab_cdr_list_recv'));
	$(".i18n-statistics-tab-cdr-list-count").text(i18next.t('statistics.tab_cdr_list_count'));
	$(".i18n-statistics-tab-cdr-list-domain").text(i18next.t('statistics.tab_cdr_list_domain'));
	$(".i18n-statistics-tab-cdr-list-size").text(i18next.t('statistics.tab_cdr_list_size'));
	$(".i18n-statistics-tab-cdr-sender-top5").text(i18next.t('statistics.tab_cdr_sender_top5'));
	$(".i18n-statistics-tab-cdr-sender-no").text(i18next.t('statistics.tab_cdr_sender_no'));
	$(".i18n-statistics-tab-cdr-sender-title").text(i18next.t('statistics.tab_cdr_sender_title'));
	$(".i18n-statistics-tab-cdr-sender-count").text(i18next.t('statistics.tab_cdr_sender_count'));
	$(".i18n-statistics-tab-cdr-recver-top5").text(i18next.t('statistics.tab_cdr_recver_top5'));
	$(".i18n-statistics-tab-cdr-recver-no").text(i18next.t('statistics.tab_cdr_recver_no'));
	$(".i18n-statistics-tab-cdr-recver-title").text(i18next.t('statistics.tab_cdr_recver_title'));
	$(".i18n-statistics-tab-cdr-recver-count").text(i18next.t('statistics.tab_cdr_recver_count'));
	$(".i18n-statistics-tab-normal-total").text(i18next.t('statistics.tab_normal_total'));
	$(".i18n-statistics-tab-normal-count").text(i18next.t('statistics.tab_normal_count'));
	$(".i18n-statistics-tab-normal-select-all-domain").text(i18next.t('statistics.tab_normal_select_all_domain'));
	$(".i18n-statistics-tab-normal-period-week").text(i18next.t('statistics.tab_normal_period_week'));
	$(".i18n-statistics-tab-normal-period-month").text(i18next.t('statistics.tab_normal_period_month'));
	$(".i18n-statistics-tab-normal-period-custom").text(i18next.t('statistics.tab_normal_period_custom'));
	$(".i18n-statistics-tab-normal-graph-title").attr('title',i18next.t('statistics.tab_normal_graph_title'));
	$(".i18n-statistics-tab-normal-list-date").text(i18next.t('statistics.tab_normal_list_date'));
	$(".i18n-statistics-tab-normal-list-send").text(i18next.t('statistics.tab_normal_list_send'));
	$(".i18n-statistics-tab-normal-list-recv").text(i18next.t('statistics.tab_normal_list_recv'));
	$(".i18n-statistics-tab-normal-list-rs").text(i18next.t('statistics.tab_normal_list_rs'));
	$(".i18n-statistics-tab-normal-list-relay").text(i18next.t('statistics.tab_normal_list_relay'));
	$(".i18n-statistics-tab-normal-list-mirror").text(i18next.t('statistics.tab_normal_list_mirror'));
	$(".i18n-statistics-tab-normal-sender-top5").text(i18next.t('statistics.tab_normal_sender_top5'));
	$(".i18n-statistics-tab-normal-sender-no").text(i18next.t('statistics.tab_normal_sender_no'));
	$(".i18n-statistics-tab-normal-sender-title").text(i18next.t('statistics.tab_normal_sender_title'));
	$(".i18n-statistics-tab-normal-sender-count").text(i18next.t('statistics.tab_normal_sender_count'));
	$(".i18n-statistics-tab-normal-recver-top5").text(i18next.t('statistics.tab_normal_recver_top5'));
	$(".i18n-statistics-tab-normal-recver-no").text(i18next.t('statistics.tab_normal_recver_no'));
	$(".i18n-statistics-tab-normal-recver-title").text(i18next.t('statistics.tab_normal_recver_title'));
	$(".i18n-statistics-tab-normal-recver-count").text(i18next.t('statistics.tab_normal_recver_count'));
	$(".i18n-statistics-tab-normal-sender-domain-top5").text(i18next.t('statistics.tab_normal_sender_domain_top5'));
	$(".i18n-statistics-tab-normal-sender-domain-no").text(i18next.t('statistics.tab_normal_sender_domain_no'));
	$(".i18n-statistics-tab-normal-sender-domain-title").text(i18next.t('statistics.tab_normal_sender_domain_title'));
	$(".i18n-statistics-tab-normal-sender-domain-count").text(i18next.t('statistics.tab_normal_sender_domain_count'));
	$(".i18n-statistics-tab-normal-recver-domain-top5").text(i18next.t('statistics.tab_normal_recver_domain_top5'));
	$(".i18n-statistics-tab-normal-recver-domain-no").text(i18next.t('statistics.tab_normal_recver_domain_no'));
	$(".i18n-statistics-tab-normal-recver-domain-title").text(i18next.t('statistics.tab_normal_recver_domain_title'));
	$(".i18n-statistics-tab-normal-recver-domain-count").text(i18next.t('statistics.tab_normal_recver_domain_count'));
	$(".i18n-statistics-tab-normal-sender-country-top5").text(i18next.t('statistics.tab_normal_sender_country_top5'));
	$(".i18n-statistics-tab-normal-sender-country-no").text(i18next.t('statistics.tab_normal_sender_country_no'));
	$(".i18n-statistics-tab-normal-sender-country-title").text(i18next.t('statistics.tab_normal_sender_country_title'));
	$(".i18n-statistics-tab-normal-sender-country-count").text(i18next.t('statistics.tab_normal_sender_country_count'));
	$(".i18n-statistics-tab-final-total").text(i18next.t('statistics.tab_final_total'));
	$(".i18n-statistics-tab-final-count").text(i18next.t('statistics.tab_final_count'));
	$(".i18n-statistics-tab-final-select-all-domain").text(i18next.t('statistics.tab_final_select_all_domain'));
	$(".i18n-statistics-tab-final-period-week").text(i18next.t('statistics.tab_final_period_week'));
	$(".i18n-statistics-tab-final-period-month").text(i18next.t('statistics.tab_final_period_month'));
	$(".i18n-statistics-tab-final-period-custom").text(i18next.t('statistics.tab_final_period_custom'));
	$(".i18n-statistics-tab-final-graph-title").attr('title',i18next.t('statistics.tab_final_graph_title'));
	$(".i18n-statistics-tab-final-list-date").text(i18next.t('statistics.tab_final_list_date'));
	$(".i18n-statistics-tab-final-list-pass").text(i18next.t('statistics.tab_final_list_pass'));
	$(".i18n-statistics-tab-final-list-reject").text(i18next.t('statistics.tab_final_list_reject'));
	$(".i18n-statistics-tab-final-graph-pass").text(i18next.t('statistics.tab_final_graph_pass'));
	$(".i18n-statistics-tab-final-graph-reject").text(i18next.t('statistics.tab_final_graph_reject'));
	$(".i18n-statistics-tab-all-help").text(i18next.t('statistics.tab_all_help'));
	$(".i18n-statistics-tab-spam-help").text(i18next.t('statistics.tab_spam_help'));
	$(".i18n-statistics-tab-virus-help").text(i18next.t('statistics.tab_virus_help'));
	$(".i18n-statistics-tab-cdr-help").text(i18next.t('statistics.tab_cdr_help'));
	$(".i18n-statistics-tab-normal-help").text(i18next.t('statistics.tab_normal_help'));
	$(".i18n-statistics-tab-final-help").text(i18next.t('statistics.tab_final_help'));
	$(".i18n-statistics-tab-tagging-help").text(i18next.t('statistics.tab_tagging_help'));
	
	//domain
	$(".i18n-domain-help").text(i18next.t('domain.help'));
	$(".i18n-domain-location-1depth").text(i18next.t('domain.location_1depth'));
	$(".i18n-domain-location-2depth").text(i18next.t('domain.location_2depth'));
	$(".i18n-domain-total").text(i18next.t('domain.total'));
	$(".i18n-domain-count").text(i18next.t('domain.count'));
	$(".i18n-domain-search-placeholder").attr('placeholder',i18next.t('domain.search_placeholder'));
	$(".i18n-domain-list-domain-name").text(i18next.t('domain.list_domain_name'));
	$(".i18n-domain-list-default-domain").text(i18next.t('domain.list_default_domain'));
	$(".i18n-domain-list-internal-external").text(i18next.t('domain.list_internal_external'));
	$(".i18n-domain-list-id-case-sensitivity").text(i18next.t('domain.list_id_case_sensitivity'));
	$(".i18n-domain-list-create-time").text(i18next.t('domain.list_create_time'));
	$(".i18n-domain-list-edit").text(i18next.t('domain.list_edit'));
	$(".i18n-domain-list-item-isLocal-true").text(i18next.t('domain.list_item_isLocal_true'));
	$(".i18n-domain-list-item-isLocal-false").text(i18next.t('domain.list_item_isLocal_false'));
	$(".i18n-domain-list-item-isCaseIgnore-true").text(i18next.t('domain.list_item_isCaseIgnore_true'));
	$(".i18n-domain-list-item-isCaseIgnore-false").text(i18next.t('domain.list_item_isCaseIgnore_false'));
	$(".i18n-domain-list-item-edit").attr('title',i18next.t('domain.list_item_edit'));
	$(".i18n-domain-list-item-del").attr('title',i18next.t('domain.list_item_del'));
	$(".i18n-domain-list-item-backup").attr('title',i18next.t('domain.list_item_backup'));
	$(".i18n-domain-list-item-mirror").text(i18next.t('domain.list_item_mirror'));
	$(".i18n-domain-list-item-mirror-usage").text(i18next.t('domain.list_item_mirror_usage'));
	$(".i18n-domain-list-item-mirror-port").text(i18next.t('domain.list_item_mirror_port'));
	$(".i18n-domain-list-item-smart-host-usage").text(i18next.t('domain.list_item_smart_host_usage'));
	$(".i18n-domain-list-item-smart-host").text(i18next.t('domain.list_item_smart_host'));
	$(".i18n-domain-list-item-smart-host-server").text(i18next.t('domain.list_item_smart_host_server'));
	$(".i18n-domain-list-item-smart-host-port").text(i18next.t('domain.list_item_smart_host_port'));
	$(".i18n-domain-list-item-smart-host-ssl").text(i18next.t('domain.list_item_smart_host_ssl'));
	$(".i18n-domain-list-item-smart-host-type").text(i18next.t('domain.list_item_smart_host_type'));
	$(".i18n-domain-list-item-smart-host-type-smtp").text(i18next.t('domain.list_item_smart_host_type_smtp'));
	$(".i18n-domain-list-item-smart-host-type-pop3").text(i18next.t('domain.list_item_smart_host_type_pop3'));
	$(".i18n-domain-list-item-smart-host-type-imap4").text(i18next.t('domain.list_item_smart_host_type_imap4'));
	$(".i18n-domain-list-item-server-help").text(i18next.t('domain.list_item_server_help'));
	$(".i18n-domain-list-item-smart-host-setting").text(i18next.t('domain.list_item_smart_host_setting'));
	$(".i18n-domain-modal-title").text(i18next.t('domain.modal_title'));
	$(".i18n-domain-modal-list-domain-name").text(i18next.t('domain.modal_list_domain_name'));
	$(".i18n-domain-modal-list-internal-external").text(i18next.t('domain.modal_list_internal_external'));
	$(".i18n-domain-modal-edit-title").text(i18next.t('domain.modal_edit_title'));
	$(".i18n-domain-modal-edit-list-domain-name").text(i18next.t('domain.modal_edit_list_domain_name'));
	$(".i18n-domain-modal-edit-list-default-domain").text(i18next.t('domain.modal_edit_list_default_domain'));
	$(".i18n-domain-modal-edit-list-internal-external").text(i18next.t('domain.modal_edit_list_internal_external'));
	$(".i18n-domain-label-switch-internal").text(i18next.t('domain.label_switch_internal'));
	$(".i18n-domain-label-switch-external").text(i18next.t('domain.label_switch_external'));
	$(".i18n-domain-modal-list-id-case-sensitivity").text(i18next.t('domain.modal_list_id_case_sensitivity'));
	$(".i18n-domain-modal-list-mirror-server").text(i18next.t('domain.modal_list_mirror_server'));
	$(".i18n-domain-modal-list-mirror-port").text(i18next.t('domain.modal_list_mirror_port'));
	$(".i18n-domain-modal-list-mirror-ssl").text(i18next.t('domain.modal_list_mirror_ssl'));
	$(".i18n-domain-modal-list-mirror-setting").text(i18next.t('domain.modal_list_mirror_setting'));
	$(".i18n-domain-modal-list-smarthost-server").text(i18next.t('domain.modal_list_smarthost_server'));
	$(".i18n-domain-modal-list-smarthost-port").text(i18next.t('domain.modal_list_smarthost_port'));
	$(".i18n-domain-modal-list-smarthost-ssl").text(i18next.t('domain.modal_list_smarthost_ssl'));
	
	$(".i18n-domain-modal-edit-list-id-case-sensitivity").text(i18next.t('domain.modal_edit_list_id_case_sensitivity'));
	$(".i18n-domain-label-switch-on").text(i18next.t('domain.label_switch_on'));
	$(".i18n-domain-label-switch-off").text(i18next.t('domain.label_switch_off'));
	$(".i18n-domain-modal-del-title").text(i18next.t('domain.modal_del_title'));
	$(".i18n-domain-modal-del-msg1").text(i18next.t('domain.modal_del_msg1'));
	$(".i18n-domain-modal-del-msg2").text(i18next.t('domain.modal_del_msg2'));
	$(".i18n-domain-modal-list-smarthost-on").text(i18next.t('domain.modal_list_smarthost_on'));
	$(".i18n-domain-modal-list-smarthost-off").text(i18next.t('domain.modal_list_smarthost_off'));
	$(".i18n-domain-btn-add").text(i18next.t('domain.btn_add'));
	$(".i18n-domain-btn-submit").text(i18next.t('domain.btn_submit'));
	$(".i18n-domain-btn-close").text(i18next.t('domain.btn_close'));
	$(".i18n-domain-btn-yes").text(i18next.t('domain.btn_yes'));
	$(".i18n-domain-btn-no").text(i18next.t('domain.btn_no'));
	
	//autoDelete
	$(".i18n-autoDelete-help").text(i18next.t('autoDelete.help'));
	$(".i18n-autoDelete-location-1depth").text(i18next.t('autoDelete.location_1depth'));
	$(".i18n-autoDelete-location-2depth").text(i18next.t('autoDelete.location_2depth'));
	$(".i18n-autoDelete-usage").text(i18next.t('autoDelete.usage'));
	$(".i18n-autoDelete-label-switch-on").text(i18next.t('autoDelete.label_switch_on'));
	$(".i18n-autoDelete-label-switch-off").text(i18next.t('autoDelete.label_switch_off'));
	$(".i18n-autoDelete-log-file").text(i18next.t('autoDelete.log_file'));
	$(".i18n-autoDelete-log-file-help1").text(i18next.t('autoDelete.log_file_help1'));
	$(".i18n-autoDelete-log-file-help2").text(i18next.t('autoDelete.log_file_help2'));
	$(".i18n-autoDelete-save-mail").text(i18next.t('autoDelete.save_mail'));
	$(".i18n-autoDelete-save-mail-help1").text(i18next.t('autoDelete.save_mail_help1'));
	$(".i18n-autoDelete-save-mail-help2").text(i18next.t('autoDelete.save_mail_help2'));
	$(".i18n-autoDelete-mail-list").text(i18next.t('autoDelete.mail_list'));
	$(".i18n-autoDelete-mail-list-help1").text(i18next.t('autoDelete.mail_list_help1'));
	$(".i18n-autoDelete-mail-list-help2").text(i18next.t('autoDelete.mail_list_help2'));
	$(".i18n-autoDelete-common-help").text(i18next.t('autoDelete.common_help'));
	$(".i18n-autoDelete-btn-submit").text(i18next.t('autoDelete.btn_submit'));
	
	//smtp
	$(".i18n-smtp-help").text(i18next.t('smtp.help'));
	$(".i18n-smtp-location-1depth").text(i18next.t('smtp.location_1depth'));
	$(".i18n-smtp-location-2depth").text(i18next.t('smtp.location_2depth'));
	$(".i18n-smtp-log-setting").text(i18next.t('smtp.log_setting'));
	$(".i18n-smtp-log-path").text(i18next.t('smtp.log_path'));
	$(".i18n-smtp-log-level").text(i18next.t('smtp.log_level'));
	$(".i18n-smtp-log-level-error").text(i18next.t('smtp.log_level_error'));
	$(".i18n-smtp-log-level-info").text(i18next.t('smtp.log_level_info'));
	$(".i18n-smtp-log-level-debug").text(i18next.t('smtp.log_level_debug'));
	$(".i18n-smtp-dns-socket").text(i18next.t('smtp.dns_socket'));
	$(".i18n-smtp-dns-server").text(i18next.t('smtp.dns_server'));
	$(".i18n-smtp-port-number").text(i18next.t('smtp.port_number'));
	$(".i18n-smtp-port").text(i18next.t('smtp.port'));
	$(".i18n-smtp-ipv4").text(i18next.t('smtp.ipv4'));
	$(".i18n-smtp-ipv4-label-switch-on").text(i18next.t('smtp.ipv4_label_switch_on'));
	$(".i18n-smtp-ipv4-label-switch-off").text(i18next.t('smtp.ipv4_label_switch_off'));
	$(".i18n-smtp-ipv6").text(i18next.t('smtp.ipv6'));
	$(".i18n-smtp-ipv6-label-switch-on").text(i18next.t('smtp.ipv6_label_switch_on'));
	$(".i18n-smtp-ipv6-label-switch-off").text(i18next.t('smtp.ipv6_label_switch_off'));
	$(".i18n-smtp-connection").text(i18next.t('smtp.connection'));
	$(".i18n-smtp-second").text(i18next.t('smtp.second'));
	$(".i18n-smtp-command").text(i18next.t('smtp.command'));
	$(".i18n-smtp-receive-mail").text(i18next.t('smtp.receive_mail'));
	$(".i18n-smtp-smtp-msg-queue").text(i18next.t('smtp.smtp_msg_queue'));
	$(".i18n-smtp-queue-empty-period").text(i18next.t('smtp.queue_empty_period'));
	$(".i18n-smtp-queue-path").text(i18next.t('smtp.queue_path'));
	$(".i18n-smtp-queue-count").text(i18next.t('smtp.queue_count'));
	$(".i18n-smtp-count").text(i18next.t('smtp.count'));
	$(".i18n-smtp-return-received-mail").text(i18next.t('smtp.return_received_mail'));
	$(".i18n-smtp-hour-later").text(i18next.t('smtp.hour_later'));
	$(".i18n-smtp-return-sent-mail").text(i18next.t('smtp.return_sent_mail'));
	$(".i18n-smtp-delete-returned-mail").text(i18next.t('smtp.delete_returned_mail'));
	$(".i18n-smtp-queue-connection").text(i18next.t('smtp.queue_connection'));
	$(".i18n-smtp-queue-command").text(i18next.t('smtp.queue_command'));
	$(".i18n-smtp-queue-receive-mail").text(i18next.t('smtp.queue_receive_mail'));
	$(".i18n-smtp-smtp-management").text(i18next.t('smtp.smtp_management'));
	$(".i18n-smtp-use-smtp-auth").text(i18next.t('smtp.use_smtp_auth'));
	$(".i18n-smtp-use-smtp-auth-label-switch-on").text(i18next.t('smtp.use_smtp_auth_label_switch_on'));
	$(".i18n-smtp-use-smtp-auth-label-switch-off").text(i18next.t('smtp.use_smtp_auth_label_switch_off'));
	$(".i18n-smtp-allow-relay-local-machine").text(i18next.t('smtp.allow_relay_local_machine'));
	$(".i18n-smtp-allow-relay-local-machine-label-switch-on").text(i18next.t('smtp.allow_relay_local_machine_label_switch_on'));
	$(".i18n-smtp-allow-relay-local-machine-label-switch-off").text(i18next.t('smtp.allow_relay_local_machine_label_switch_off'));
	$(".i18n-smtp-allow-relay-smtp-authed").text(i18next.t('smtp.allow_relay_smtp_authed'));
	$(".i18n-smtp-allow-relay-smtp-authed-label-switch-on").text(i18next.t('smtp.allow_relay_smtp_authed_label_switch_on'));
	$(".i18n-smtp-allow-relay-smtp-authed-label-switch-off").text(i18next.t('smtp.allow_relay_smtp_authed_label_switch_off'));
	$(".i18n-smtp-deny-external-mail-address").text(i18next.t('smtp.deny_external_mail_address'));
	$(".i18n-smtp-deny-external-mail-address-label-switch-on").text(i18next.t('smtp.deny_external_mail_address_label_switch_on'));
	$(".i18n-smtp-deny-external-mail-address-label-switch-off").text(i18next.t('smtp.deny_external_mail_address_label_switch_off'));
	$(".i18n-smtp-use-ssl").text(i18next.t('smtp.use_ssl'));
	$(".i18n-smtp-use-ssl-label-switch-on").text(i18next.t('smtp.use_ssl_label_switch_on'));
	$(".i18n-smtp-use-ssl-label-switch-off").text(i18next.t('smtp.use_ssl_label_switch_off'));
	$(".i18n-smtp-ssl-port-number").text(i18next.t('smtp.ssl_port_number'));
	$(".i18n-smtp-use-tls").text(i18next.t('smtp.use_tls'));
	$(".i18n-smtp-use-tls-label-switch-on").text(i18next.t('smtp.use_tls_label_switch_on'));
	$(".i18n-smtp-use-tls-label-switch-off").text(i18next.t('smtp.use_tls_label_switch_off'));
	$(".i18n-smtp-use-submission-port").text(i18next.t('smtp.use_submission_port'));
	$(".i18n-smtp-use-submission-port-label-switch-on").text(i18next.t('smtp.use_submission_port_label_switch_on'));
	$(".i18n-smtp-use-submission-port-label-switch-off").text(i18next.t('smtp.use_submission_port_label_switch_off'));
	$(".i18n-smtp-submission-port-number").text(i18next.t('smtp.submission_port_number'));
	$(".i18n-smtp-btn-submit").text(i18next.t('smtp.btn_submit'));
	
	//config
	$(".i18n-config-help").text(i18next.t('config.help'));
	$(".i18n-config-location-1depth").text(i18next.t('config.location_1depth'));
	$(".i18n-config-location-2depth").text(i18next.t('config.location_2depth'));
	$(".i18n-config-btn-submit").text(i18next.t('config.btn_submit'));
	$(".i18n-config-approval-help").text(i18next.t('config.approval_help'));
	$(".i18n-config-auth-help").text(i18next.t('config.auth_help'));
	$(".i18n-config-core-help").text(i18next.t('config.core_help'));
	$(".i18n-config-cron-help").text(i18next.t('config.cron_help'));
	$(".i18n-config-dbcp-help").text(i18next.t('config.dbcp_help'));
	$(".i18n-config-seg-help").text(i18next.t('config.seg_help'));
	$(".i18n-config-smtp-help").text(i18next.t('config.smtp_help'));
	$(".i18n-config-sysmon-help").text(i18next.t('config.sysmon_help'));
	
	//notices
	$(".i18n-notices-help").text(i18next.t('notices.help'));
	$(".i18n-notices-location-1depth").text(i18next.t('notices.location_1depth'));
	$(".i18n-notices-location-2depth").text(i18next.t('notices.location_2depth'));
	$(".i18n-notices-btn-submit").text(i18next.t('notices.btn_submit'));
	$(".i18n-notices-btn-template").text(i18next.t('notices.btn_template'));
	$(".i18n-notices-btn-add").text(i18next.t('notices.btn_add'));
	$(".i18n-notices-btn-close").text(i18next.t('notices.btn_close'));
	$(".i18n-notices-btn-send").text(i18next.t('notices.btn_send'));
	$(".i18n-notices-error").text(i18next.t('notices.error'));
	$(".i18n-notices-error-msg").text(i18next.t('notices.error_msg'));
	$(".i18n-notices-error-msg2").text(i18next.t('notices.error_msg2'));
	$(".i18n-notices-modal-template").text(i18next.t('notices.modal_template'));
	$(".i18n-notices-okay").text(i18next.t('notices.okay'));
	
	$(".i18n-notices-interval-type").text(i18next.t('notices.interval_type'));
	$(".i18n-notices-interval-now").text(i18next.t('notices.interval_now'));
	$(".i18n-notices-interval-hourly").text(i18next.t('notices.interval_hourly'));
	$(".i18n-notices-interval-daily").text(i18next.t('notices.interval_daily'));
	$(".i18n-notices-url").text(i18next.t('notices.url'));
	
	$(".i18n-notices-okay-msg").text(i18next.t('notices.okay_msg'));
	$(".i18n-notices-tab-system").text(i18next.t('notices.tab_system'));
	$(".i18n-notices-tab-system-help").text(i18next.t('notices.tab_system_help'));
	$(".i18n-notices-tab-system-usage").text(i18next.t('notices.tab_system_usage'));
	$(".i18n-notices-tab-system-usage-label-switch-on").text(i18next.t('notices.tab_system_usage_label_switch_on'));
	$(".i18n-notices-tab-system-usage-label-switch-off").text(i18next.t('notices.tab_system_usage_label_switch_off'));
	$(".i18n-notices-tab-system-refresh-time").text(i18next.t('notices.tab_system_refresh_time'));
	$(".i18n-notices-tab-system-refresh-time-min").text(i18next.t('notices.tab_system_refresh_time_min'));
	$(".i18n-notices-tab-system-refresh-time-hour").text(i18next.t('notices.tab_system_refresh_time_hour'));
	$(".i18n-notices-tab-system-refresh-time-day").text(i18next.t('notices.tab_system_refresh_time_day'));
	$(".i18n-notices-tab-system-object").text(i18next.t('notices.tab_system_object'));
	$(".i18n-notices-tab-system-threshold").text(i18next.t('notices.tab_system_threshold'));
	$(".i18n-notices-tab-system-sent-time").text(i18next.t('notices.tab_system_sent_time'));
	$(".i18n-notices-tab-system-cpu").text(i18next.t('notices.tab_system_cpu'));
	$(".i18n-notices-tab-system-cpu-warning").text(i18next.t('notices.tab_system_cpu_warning'));
	$(".i18n-notices-tab-system-cpu-danger").text(i18next.t('notices.tab_system_cpu_danger'));
	$(".i18n-notices-tab-system-cpu-warning-chk").text(i18next.t('notices.tab_system_cpu_warning_chk'));
	$(".i18n-notices-tab-system-cpu-danger-chk").text(i18next.t('notices.tab_system_cpu_danger_chk'));
	$(".i18n-notices-tab-system-memory").text(i18next.t('notices.tab_system_memory'));
	$(".i18n-notices-tab-system-memory-warning").text(i18next.t('notices.tab_system_memory_warning'));
	$(".i18n-notices-tab-system-memory-danger").text(i18next.t('notices.tab_system_memory_danger'));
	$(".i18n-notices-tab-system-memory-warning-chk").text(i18next.t('notices.tab_system_memory_warning_chk'));
	$(".i18n-notices-tab-system-memory-danger-chk").text(i18next.t('notices.tab_system_memory_danger_chk'));
	$(".i18n-notices-tab-system-disk").text(i18next.t('notices.tab_system_disk'));
	$(".i18n-notices-tab-system-disk-warning").text(i18next.t('notices.tab_system_disk_warning'));
	$(".i18n-notices-tab-system-disk-danger").text(i18next.t('notices.tab_system_disk_danger'));
	$(".i18n-notices-tab-system-disk-warning-chk").text(i18next.t('notices.tab_system_disk_warning_chk'));
	$(".i18n-notices-tab-system-disk-danger-chk").text(i18next.t('notices.tab_system_disk_danger_chk'));
	$(".i18n-notices-tab-system-network").text(i18next.t('notices.tab_system_network'));
	$(".i18n-notices-tab-system-network-warning").text(i18next.t('notices.tab_system_network_warning'));
	$(".i18n-notices-tab-system-network-danger").text(i18next.t('notices.tab_system_network_danger'));
	$(".i18n-notices-tab-system-network-warning-chk").text(i18next.t('notices.tab_system_network_warning_chk'));
	$(".i18n-notices-tab-system-network-danger-chk").text(i18next.t('notices.tab_system_network_danger_chk'));
	$(".i18n-notices-tab-system-sender-mail").text(i18next.t('notices.tab_system_sender_mail'));
	$(".i18n-notices-tab-system-noti-email").text(i18next.t('notices.tab_system_noti_email'));
	$(".i18n-notices-tab-system-template").text(i18next.t('notices.tab_system_template'));
	$(".i18n-notices-tab-system-mail-title").text(i18next.t('notices.tab_system_mail_title'));
	$(".i18n-notices-tab-system-mail-title-placeholder").attr('placeholder',i18next.t('notices.tab_system_mail_title_placeholder'));
	$(".i18n-notices-tab-system-safe-mail-title").text(i18next.t('notices.tab_system_safe_mail_title'));
	$(".i18n-notices-tab-system-safe-mail-title-placeholder").attr('placeholder',i18next.t('notices.tab_system_safe_mail_title_placeholder'));
	
	$(".i18n-notices-tab-spam").text(i18next.t('notices.tab_spam'));
	$(".i18n-notices-tab-spam-help").text(i18next.t('notices.tab_spam_help'));
	$(".i18n-notices-tab-spam-usage").text(i18next.t('notices.tab_spam_usage'));
	$(".i18n-notices-tab-spam-usage-label-switch-on").text(i18next.t('notices.tab_spam_usage_label_switch_on'));
	$(".i18n-notices-tab-spam-usage-label-switch-off").text(i18next.t('notices.tab_spam_usage_label_switch_off'));
	$(".i18n-notices-tab-spam-sent-time").text(i18next.t('notices.tab_spam_sent_time'));
	$(".i18n-notices-tab-spam-sent-time-1hour").text(i18next.t('notices.tab_spam_sent_time_1hour'));
	$(".i18n-notices-tab-spam-sent-time-2hour").text(i18next.t('notices.tab_spam_sent_time_2hour'));
	$(".i18n-notices-tab-spam-sent-time-3hour").text(i18next.t('notices.tab_spam_sent_time_3hour'));
	$(".i18n-notices-tab-spam-sent-time-4hour").text(i18next.t('notices.tab_spam_sent_time_4hour'));
	$(".i18n-notices-tab-spam-sent-time-6hour").text(i18next.t('notices.tab_spam_sent_time_6hour'));
	$(".i18n-notices-tab-spam-sent-time-8hour").text(i18next.t('notices.tab_spam_sent_time_8hour'));
	$(".i18n-notices-tab-spam-sent-time-12hour").text(i18next.t('notices.tab_spam_sent_time_12hour'));
	$(".i18n-notices-tab-spam-sent-time-24hour").text(i18next.t('notices.tab_spam_sent_time_24hour'));
	$(".i18n-notices-tab-spam-sent-time-help-msg1").text(i18next.t('notices.tab_spam_sent_time_help_msg1'));
	$(".i18n-notices-tab-spam-sent-time-help-msg2").text(i18next.t('notices.tab_spam_sent_time_help_msg2'));
	$(".i18n-notices-tab-spam-mail-title").text(i18next.t('notices.tab_spam_mail_title'));
	$(".i18n-notices-tab-spam-mail-title-placeholder").attr('placeholder',i18next.t('notices.tab_spam_mail_title_placeholder'));
	$(".i18n-notices-tab-spam-sender-mail").text(i18next.t('notices.tab_spam_sender_mail'));
	$(".i18n-notices-tab-spam-sender-user-mail").text(i18next.t('notices.tab_spam_sender_user_mail'));
	$(".i18n-notices-tab-spam-sender-user-mail-placeholder").attr('placeholder', i18next.t('notices.tab_spam_sender_user_mail_placeholder'));
	$(".i18n-notices-tab-spam-sender-user-mail-once").text(i18next.t('notices.tab_spam_sender_user_mail_once'));
	$(".i18n-notices-tab-spam-sender-user-mail-popup-title").text(i18next.t('notices.tab_spam_sender_user_mail_popup_title'));
	$(".i18n-notices-tab-spam-sender-user-mail-popup-help").text(i18next.t('notices.tab_spam_sender_user_mail_popup_help'));
	
	$(".i18n-notices-tab-spam-template").text(i18next.t('notices.tab_spam_template'));
	$(".i18n-notices-tab-spam-send-user-noti-err").text(i18next.t('notices.tab_spam_send_user_noti_err'));
	
	$(".i18n-notices-tab-virus").text(i18next.t('notices.tab_virus'));
	$(".i18n-notices-tab-virus-help").text(i18next.t('notices.tab_virus_help'));
	$(".i18n-notices-tab-virus-usage").text(i18next.t('notices.tab_virus_usage'));
	$(".i18n-notices-tab-virus-usage-label-switch-on").text(i18next.t('notices.tab_virus_usage_label_switch_on'));
	$(".i18n-notices-tab-virus-usage-label-switch-off").text(i18next.t('notices.tab_virus_usage_label_switch_off'));
	$(".i18n-notices-tab-virus-threshold").text(i18next.t('notices.tab_virus_threshold'));
	$(".i18n-notices-tab-virus-threshold-help").text(i18next.t('notices.tab_virus_threshold_help'));
	$(".i18n-notices-tab-virus-sent-type").text(i18next.t('notices.tab_virus_sent_type'));
	$(".i18n-notices-tab-virus-sent-once").text(i18next.t('notices.tab_virus_sent_once'));
	$(".i18n-notices-tab-virus-sent-roop").text(i18next.t('notices.tab_virus_sent_roop'));
	$(".i18n-notices-tab-virus-content-help").text(i18next.t('notices.tab_virus_content_help'));
	$(".i18n-notices-tab-virus-sender-mail").text(i18next.t('notices.tab_virus_sender_mail'));
	$(".i18n-notices-tab-virus-noti-email").text(i18next.t('notices.tab_virus_noti_email'));
	$(".i18n-notices-tab-virus-template").text(i18next.t('notices.tab_virus_template'));
	$(".i18n-notices-tab-virus-mail-title").text(i18next.t('notices.tab_virus_mail_title'));
	$(".i18n-notices-tab-virus-mail-title-placeholder").attr('placeholder',i18next.t('notices.tab_virus_mail_title_placeholder'));
	
	$(".i18n-notices-tab-mail").text(i18next.t('notices.tab_mail'));
	$(".i18n-notices-tab-mail-help").text(i18next.t('notices.tab_mail_help'));
	$(".i18n-notices-tab-mail-send-usage").text(i18next.t('notices.tab_mail_send_usage'));
	$(".i18n-notices-tab-mail-send-usage-label-switch-on").text(i18next.t('notices.tab_mail_send_usage_label_switch_on'));
	$(".i18n-notices-tab-mail-send-usage-label-switch-off").text(i18next.t('notices.tab_mail_send_usage_label_switch_off'));
	$(".i18n-notices-tab-mail-send-threshold").text(i18next.t('notices.tab_mail_send_threshold'));
	$(".i18n-notices-tab-mail-send-threshold-help").text(i18next.t('notices.tab_mail_send_threshold_help'));
	$(".i18n-notices-tab-mail-recv-usage").text(i18next.t('notices.tab_mail_recv_usage'));
	$(".i18n-notices-tab-mail-recv-usage-label-switch-on").text(i18next.t('notices.tab_mail_recv_usage_label_switch_on'));
	$(".i18n-notices-tab-mail-recv-usage-label-switch-off").text(i18next.t('notices.tab_mail_recv_usage_label_switch_off'));
	$(".i18n-notices-tab-mail-recv-threshold").text(i18next.t('notices.tab_mail_recv_threshold'));
	$(".i18n-notices-tab-mail-recv-threshold-help").text(i18next.t('notices.tab_mail_recv_threshold_help'));
	$(".i18n-notices-tab-mail-rs-usage").text(i18next.t('notices.tab_mail_rs_usage'));
	$(".i18n-notices-tab-mail-rs-usage-label-switch-on").text(i18next.t('notices.tab_mail_rs_usage_label_switch_on'));
	$(".i18n-notices-tab-mail-rs-usage-label-switch-off").text(i18next.t('notices.tab_mail_rs_usage_label_switch_off'));
	$(".i18n-notices-tab-mail-rs-threshold").text(i18next.t('notices.tab_mail_rs_threshold'));
	$(".i18n-notices-tab-mail-rs-threshold-help").text(i18next.t('notices.tab_mail_rs_threshold_help'));
	$(".i18n-notices-tab-mail-relay-usage").text(i18next.t('notices.tab_mail_relay_usage'));
	$(".i18n-notices-tab-mail-relay-usage-label-switch-on").text(i18next.t('notices.tab_mail_relay_usage_label_switch_on'));
	$(".i18n-notices-tab-mail-relay-usage-label-switch-off").text(i18next.t('notices.tab_mail_relay_usage_label_switch_off'));
	$(".i18n-notices-tab-mail-relay-threshold").text(i18next.t('notices.tab_mail_relay_threshold'));
	$(".i18n-notices-tab-mail-relay-threshold-help").text(i18next.t('notices.tab_mail_relay_threshold_help'));
	$(".i18n-notices-tab-mail-content-help").text(i18next.t('notices.tab_mail_content_help'));
	$(".i18n-notices-tab-mail-title").text(i18next.t('notices.tab_mail_title'));
	$(".i18n-notices-tab-mail-title-placeholder").attr('placeholder',i18next.t('notices.tab_mail_title_placeholder'));
	$(".i18n-notices-tab-mail-sender-mail").text(i18next.t('notices.tab_mail_sender_mail'));
	$(".i18n-notices-tab-mail-noti-email").text(i18next.t('notices.tab_mail_noti_email'));
	$(".i18n-notices-tab-mail-template").text(i18next.t('notices.tab_mail_template'));
	$(".i18n-notices-tab-mail-mail-title").text(i18next.t('notices.tab_mail_mail_title'));
	$(".i18n-notices-tab-mail-mail-title-placeholder").attr('placeholder',i18next.t('notices.tab_mail_mail_title_placeholder'));
	
	$(".i18n-notices-tab-queue").text(i18next.t('notices.tab_queue'));
	$(".i18n-notices-tab-queue-help").text(i18next.t('notices.tab_queue_help'));
	$(".i18n-notices-tab-queue-usage").text(i18next.t('notices.tab_queue_usage'));
	$(".i18n-notices-tab-queue-usage-label-switch-on").text(i18next.t('notices.tab_queue_usage_label_switch_on'));
	$(".i18n-notices-tab-queue-usage-label-switch-off").text(i18next.t('notices.tab_queue_usage_label_switch_off'));
	$(".i18n-notices-tab-queue-threshold").text(i18next.t('notices.tab_queue_threshold'));
	$(".i18n-notices-tab-queue-threshold-help").text(i18next.t('notices.tab_queue_threshold_help'));
	$(".i18n-notices-tab-queue-sent-type").text(i18next.t('notices.tab_queue_sent_type'));
	$(".i18n-notices-tab-queue-sent-once").text(i18next.t('notices.tab_queue_sent_once'));
	$(".i18n-notices-tab-queue-sent-roop").text(i18next.t('notices.tab_queue_sent_roop'));
	$(".i18n-notices-tab-queue-content-help").text(i18next.t('notices.tab_queue_content_help'));
	$(".i18n-notices-tab-queue-sender-mail").text(i18next.t('notices.tab_queue_sender_mail'));
	$(".i18n-notices-tab-queue-noti-email").text(i18next.t('notices.tab_queue_noti_email'));
	$(".i18n-notices-tab-queue-template").text(i18next.t('notices.tab_queue_tamplate'));
	$(".i18n-notices-tab-queue-mail-title").text(i18next.t('notices.tab_queue_mail_title'));
	$(".i18n-notices-tab-queue-mail-title-placeholder").attr('placeholder',i18next.t('notices.tab_queue_mail_title_placeholder'));
	$(".i18n-notices-tab-queue-safe-mail-title").text(i18next.t('notices.tab_queue_safe_mail_title'));
	$(".i18n-notices-tab-queue-safe-mail-title-placeholder").attr('placeholder',i18next.t('notices.tab_queue_safe_mail_title_placeholder'));
	
	$(".i18n-notices-tab-report").text(i18next.t('notices.tab_report'));
	$(".i18n-notices-tab-report-help").text(i18next.t('notices.tab_report_help'));
	$(".i18n-notices-tab-report-usage").text(i18next.t('notices.tab_report_usage'));
	$(".i18n-notices-tab-report-usage-label-switch-on").text(i18next.t('notices.tab_report_usage_label_switch_on'));
	$(".i18n-notices-tab-report-usage-label-switch-off").text(i18next.t('notices.tab_report_usage_label_switch_off'));
	$(".i18n-notices-tab-report-period").text(i18next.t('notices.tab_report_period'));
	$(".i18n-notices-tab-report-period-day").text(i18next.t('notices.tab_report_period_day'));
	$(".i18n-notices-tab-report-period-week").text(i18next.t('notices.tab_report_period_week'));
	$(".i18n-notices-tab-report-period-month").text(i18next.t('notices.tab_report_period_month'));
	$(".i18n-notices-tab-report-period-select").text(i18next.t('notices.tab_report_period_select'));
	$(".i18n-notices-tab-report-period-dateFrom").text(i18next.t('notices.tab_report_period_dateFrom'));
	$(".i18n-notices-tab-report-period-dateTo").text(i18next.t('notices.tab_report_period_dateTo'));
	$(".i18n-notices-tab-report-start-noti").text(i18next.t('notices.tab_report_start_noti'));
	$(".i18n-notices-tab-report-start-noti-today").text(i18next.t('notices.tab_report_start_noti_today'));
	$(".i18n-notices-tab-report-start-noti-custom").text(i18next.t('notices.tab_report_start_noti_custom'));
	$(".i18n-notices-tab-report-sent-object").text(i18next.t('notices.tab_report_sent_object'));
	$(".i18n-notices-tab-report-sent-object-all").text(i18next.t('notices.tab_report_sent_object_all'));
	$(".i18n-notices-tab-report-sent-object-normal").text(i18next.t('notices.tab_report_sent_object_normal'));
	$(".i18n-notices-tab-report-sent-object-spam").text(i18next.t('notices.tab_report_sent_object_spam'));
	$(".i18n-notices-tab-report-sent-object-virus").text(i18next.t('notices.tab_report_sent_object_virus'));
	$(".i18n-notices-tab-report-sent-object-send").text(i18next.t('notices.tab_report_sent_object_send'));
	$(".i18n-notices-tab-report-sent-object-recv").text(i18next.t('notices.tab_report_sent_object_recv'));
	$(".i18n-notices-tab-report-sent-object-cdr").text(i18next.t('notices.tab_report_sent_object_cdr'));
	$(".i18n-notices-tab-report-sender-mail").text(i18next.t('notices.tab_report_sender_mail'));
	$(".i18n-notices-tab-report-mail-title").text(i18next.t('notices.tab_report_mail_title'));
	$(".i18n-notices-tab-report-mail-title-placeholder").attr('placeholder',i18next.t('notices.tab_report_mail_title_placeholder'));
	$(".i18n-notices-tab-report-content-help").text(i18next.t('notices.tab_report_content_help'));
	$(".i18n-notices-tab-report-noti-email").text(i18next.t('notices.tab_report_noti_email'));
	$(".i18n-notices-tab-report-template").text(i18next.t('notices.tab_report_template'));
	
	$(".i18n-notices-tab-service").text(i18next.t('notices.tab_service'));
	$(".i18n-notices-tab-service-usage").text(i18next.t('notices.tab_service_usage'));
	$(".i18n-notices-tab-service-sender-mail").text(i18next.t('notices.tab_service_sender_mail'));
	$(".i18n-notices-tab-service-mail-title").text(i18next.t('notices.tab_service_mail_title'));
	$(".i18n-notices-tab-service-mail-title-placeholder").attr('placeholder',i18next.t('notices.tab_service_mail_title_placeholder'));
	$(".i18n-notices-tab-service-content-help").text(i18next.t('notices.tab_service_content_help'));
	$(".i18n-notices-tab-service-noti-email").text(i18next.t('notices.tab_service_noti_email'));
	$(".i18n-notices-tab-service-template").text(i18next.t('notices.tab_service_template'));
	
	$(".i18n-notices-tab-vaccine").text(i18next.t('notices.tab_vaccine'));
	$(".i18n-notices-tab-vaccine-help").text(i18next.t('notices.tab_vaccine_help'));
	
	$(".i18n-notices-tab-error").text(i18next.t('notices.tab_error'));
	$(".i18n-notices-tab-error-help").text(i18next.t('notices.tab_error_help'));
	
	//admin
	$(".i18n-admin-help").text(i18next.t('admin.help'));
	$(".i18n-admin-location-1depth").text(i18next.t('admin.location_1depth'));
	$(".i18n-admin-location-2depth").text(i18next.t('admin.location_2depth'));
	$(".i18n-admin-btn-add").text(i18next.t('admin.btn_add'));
	$(".i18n-admin-btn-submit").text(i18next.t('admin.btn_submit'));
	$(".i18n-admin-btn-update").text(i18next.t('admin.btn_update'));
	$(".i18n-admin-btn-modify").text(i18next.t('admin.btn_modify'));
	$(".i18n-admin-btn-delete").text(i18next.t('admin.btn_delete'));
	$(".i18n-admin-btn-close").text(i18next.t('admin.btn_close'));
	$(".i18n-admin-btn-modify-title").attr('title',i18next.t('admin.btn_modify_title'));
	$(".i18n-admin-btn-delete-title").attr('title',i18next.t('admin.btn_modify_title'));
	
	$(".i18n-admin-tab-access-setting").text(i18next.t('admin.tab_access_setting'));
	$(".i18n-admin-tab-access-setting-help").text(i18next.t('admin.tab_access_setting_help'));
	$(".i18n-admin-tab-access-setting-total").text(i18next.t('admin.tab_access_setting_total'));
	$(".i18n-admin-tab-access-setting-count").text(i18next.t('admin.tab_access_setting_count'));
	$(".i18n-admin-tab-access-setting-usage").text(i18next.t('admin.tab_access_setting_usage'));
	$(".i18n-admin-tab-access-setting-usage-label-switch-on").text(i18next.t('admin.tab_access_setting_usage_label_switch_on'));
	$(".i18n-admin-tab-access-setting-usage-label-switch-off").text(i18next.t('admin.tab_access_setting_usage_label_switch_off'));
	$(".i18n-admin-tab-access-setting-header-title").text(i18next.t('admin.tab_access_setting_header_title'));
	$(".i18n-admin-tab-access-setting-header-allow").text(i18next.t('admin.tab_access_setting_header_allow'));
	$(".i18n-admin-tab-access-setting-header-deny").text(i18next.t('admin.tab_access_setting_header_deny'));
	$(".i18n-admin-tab-access-setting-header-add").text(i18next.t('admin.tab_access_setting_header_add'));
	$(".i18n-admin-tab-access-setting-list-ip").text(i18next.t('admin.tab_access_setting_list_ip'));
	$(".i18n-admin-tab-access-setting-list-ip-type").text(i18next.t('admin.tab_access_setting_list_ip_type'));
	$(".i18n-admin-tab-access-setting-list-desc").text(i18next.t('admin.tab_access_setting_list_desc'));
	$(".i18n-admin-tab-access-setting-list-time").text(i18next.t('admin.tab_access_setting_list_time'));
	$(".i18n-admin-tab-access-setting-list-update").text(i18next.t('admin.tab_access_setting_list_update'));
	$(".i18n-admin-tab-access-setting-add-modal-title").text(i18next.t('admin.tab_access_setting_add_modal_title'));
	$(".i18n-admin-tab-access-setting-add-modal-ip").text(i18next.t('admin.tab_access_setting_add_modal_ip'));
	$(".i18n-admin-tab-access-setting-add-modal-ip-title").attr('title',i18next.t('admin.tab_access_setting_add_modal_ip_title'));
	$(".i18n-admin-tab-access-setting-add-modal-policy").text(i18next.t('admin.tab_access_setting_add_modal_policy'));
	$(".i18n-admin-tab-access-setting-add-modal-allow").text(i18next.t('admin.tab_access_setting_add_modal_allow'));
	$(".i18n-admin-tab-access-setting-add-modal-deny").text(i18next.t('admin.tab_access_setting_add_modal_deny'));
	$(".i18n-admin-tab-access-setting-add-modal-ip-type").text(i18next.t('admin.tab_access_setting_add_modal_ip_type'));
	$(".i18n-admin-tab-access-setting-add-modal-desc").text(i18next.t('admin.tab_access_setting_add_modal_desc'));
	$(".i18n-admin-tab-access-setting-add-modal-desc-title").attr('title',i18next.t('admin.tab_access_setting_add_modal_desc_title'));
	$(".i18n-admin-tab-access-setting-update-modal-title").text(i18next.t('admin.tab_access_setting_update_title'));
	$(".i18n-admin-tab-access-setting-update-modal-ip").text(i18next.t('admin.tab_access_setting_update_modal_ip'));
	$(".i18n-admin-tab-access-setting-update-modal-policy").text(i18next.t('admin.tab_access_setting_update_modal_policy'));
	$(".i18n-admin-tab-access-setting-update-modal-allow").text(i18next.t('admin.tab_access_setting_update_modal_allow'));
	$(".i18n-admin-tab-access-setting-update-modal-deny").text(i18next.t('admin.tab_access_setting_update_modal_deny'));
	$(".i18n-admin-tab-access-setting-update-modal-ip-type").text(i18next.t('admin.tab_access_setting_update_modal_ip_type'));
	$(".i18n-admin-tab-access-setting-update-modal-desc").text(i18next.t('admin.tab_access_setting_update_modal_desc'));
	$(".i18n-admin-tab-access-type-ip").text(i18next.t('admin.tab_access_type_ip'));
	$(".i18n-admin-tab-access-type-netmask").text(i18next.t('admin.tab_access_type_netmask'));
	$(".i18n-admin-tab-access-type-wildcard").text(i18next.t('admin.tab_access_type_wildcard'));
	$(".i18n-admin-tab-access-setting-allow-help").text(i18next.t('admin.tab_access_setting_allow_help'));
	$(".i18n-admin-tab-access-setting-deny-help").text(i18next.t('admin.tab_access_setting_deny_help'));
	
	$(".i18n-admin-tab-language-setting").text(i18next.t('admin.tab_language_setting'));
	$(".i18n-admin-tab-language-setting-help").text(i18next.t('admin.tab_language_setting_help'));
	$(".i18n-admin-tab-language-setting-title").text(i18next.t('admin.tab_language_setting_title'));
	$(".i18n-admin-tab-language-setting-ko").text(i18next.t('admin.tab_language_setting_ko'));
	$(".i18n-admin-tab-language-setting-us").text(i18next.t('admin.tab_language_setting_us'));
	$(".i18n-admin-tab-language-setting-jp").text(i18next.t('admin.tab_language_setting_jp'));
	
	$(".i18n-admin-tab-admin-addDel").text(i18next.t('admin.tab_admin_addDel'));
	$(".i18n-admin-tab-admin-addDel-help").text(i18next.t('admin.tab_admin_addDel_help'));
	$(".i18n-admin-tab-admin-addDel-total").text(i18next.t('admin.tab_admin_addDel_total'));
	$(".i18n-admin-tab-admin-addDel-count").text(i18next.t('admin.tab_admin_addDel_count'));
	$(".i18n-admin-tab-admin-addDel-search-all").text(i18next.t('admin.tab_admin_addDel_search_all'));
	$(".i18n-admin-tab-admin-addDel-search-id").text(i18next.t('admin.tab_admin_addDel_search_id'));
	$(".i18n-admin-tab-admin-addDel-search-domain").text(i18next.t('admin.tab_admin_addDel_search_domain'));
	$(".i18n-admin-tab-admin-addDel-list-domain-name").text(i18next.t('admin.tab_admin_addDel_list_domain_name'));
	$(".i18n-admin-tab-admin-addDel-list-admin").text(i18next.t('admin.tab_admin_addDel_list_admin'));
	$(".i18n-admin-tab-admin-addDel-list-lang").text(i18next.t('admin.tab_admin_addDel_list_lang'));
	$(".i18n-admin-tab-admin-addDel-list-time").text(i18next.t('admin.tab_admin_addDel_list_time'));
	$(".i18n-admin-tab-admin-addDel-list-etc").text(i18next.t('admin.tab_admin_addDel_list_etc'));
	$(".i18n-admin-tab-admin-addDel-update-modal-title").text(i18next.t('admin.tab_admin_addDel_update_modal_title'));
	$(".i18n-admin-tab-admin-addDel-update-modal-old-pwd").text(i18next.t('admin.tab_admin_addDel_update_modal_old_pwd'));
	$(".i18n-admin-tab-admin-addDel-update-modal-new-pwd").text(i18next.t('admin.tab_admin_addDel_update_modal_new_pwd'));
	$(".i18n-admin-tab-admin-addDel-update-modal-new-pwd-confirm").text(i18next.t('admin.tab_admin_addDel_update_modal_new_pwd_confirm'));
	$(".i18n-admin-tab-admin-addDel-add-modal-title").text(i18next.t('admin.tab_admin_addDel_add_modal_title'));
	$(".i18n-admin-tab-admin-addDel-add-modal-domain-name").text(i18next.t('admin.tab_admin_addDel_add_modal_domain_name'));
	$(".i18n-admin-tab-admin-addDel-add-modal-id").text(i18next.t('admin.tab_admin_addDel_add_modal_id'));
	$(".i18n-admin-tab-admin-addDel-add-modal-name").text(i18next.t('admin.tab_admin_addDel_add_modal_name'));	
	$(".i18n-admin-tab-admin-addDel-add-modal-new-pwd").text(i18next.t('admin.tab_admin_addDel_add_modal_new_pwd'));
	$(".i18n-admin-tab-admin-addDel-add-modal-new-pwd-confirm").text(i18next.t('admin.tab_admin_addDel_add_modal_new_pwd_confirm'));
	$(".i18n-admin-tab-admin-addDel-del-modal-title").text(i18next.t('admin.tab_admin_addDel_del_modal_title'));
	$(".i18n-admin-tab-admin-addDel-del-modal-help").text(i18next.t('admin.tab_admin_addDel_del_modal_help'));
	$(".i18n-admin-tab-admin-addDel-id-chk-help").text(i18next.t('admin.tab_admin_addDel_id_chk_help'));
	$(".i18n-admin-tab-admin-addDel-list-right").text(i18next.t('admin.tab_admin_addDel_list_right'));
	$(".i18n-admin-tab-admin-addDel-domain-admin").text(i18next.t('admin.tab_admin_addDel_domain_admin'));
	$(".i18n-admin-tab-admin-addDel-system-admin").text(i18next.t('admin.tab_admin_addDel_system_admin'));
	$(".i18n-admin-tab-admin-addDel-domain-list-none").text(i18next.t('admin.tab_admin_addDel_domain_list_none'));
	$(".i18n-admin-tab-admin-addDel-modify-passwd").text(i18next.t('admin.tab_admin_addDel_modify_passwd'));
	$(".i18n-admin-tab-admin-addDel-modify-right").text(i18next.t('admin.tab_admin_addDel_modify_right'));
	
	$(".i18n-admin-tab-password-manager").text(i18next.t('admin.tab_password_manager'));
	$(".i18n-admin-tab-password-manager-help").text(i18next.t('admin.tab_password_manager_help'));
	$(".i18n-admin-tab-password-manager-length-min").text(i18next.t('admin.tab_password_manager_length_min'));
	$(".i18n-admin-tab-password-manager-special-ch").text(i18next.t('admin.tab_password_manager_special_ch'));
	$(".i18n-admin-tab-password-manager-length-num").text(i18next.t('admin.tab_password_manager_length_num'));
	$(".i18n-admin-tab-password-manager-content-help").text(i18next.t('admin.tab_password_manager_content_help'));
	$(".i18n-admin-tab-password-manager-result").text(i18next.t('admin.tab_password_manager_result'));
	$(".i18n-admin-tab-password-manager-result-help").text(i18next.t('admin.tab_password_manager_result_help'));
	
	$(".i18n-admin-tab-password-setting").text(i18next.t('admin.tab_password_setting'));
	$(".i18n-admin-tab-password-setting-help").text(i18next.t('admin.tab_password_setting_help'));
	$(".i18n-admin-tab-password-setting-old-pwd").text(i18next.t('admin.tab_password_setting_old_pwd'));
	$(".i18n-admin-tab-password-setting-old-pwd-title").attr('title',i18next.t('admin.tab_password_setting_old_pwd_title'));
	$(".i18n-admin-tab-password-setting-new-pwd").text(i18next.t('admin.tab_password_setting_new_pwd'));
	$(".i18n-admin-tab-password-setting-new-pwd-title").attr('title',i18next.t('admin.tab_password_setting_new_pwd_title'));
	$(".i18n-admin-tab-password-setting-new-pwd-confirm").text(i18next.t('admin.tab_password_setting_new_pwd_confirm'));
	$(".i18n-admin-tab-password-setting-new-pwd-confirm-title").attr('title',i18next.t('admin.tab_password_setting_new_pwd_title'));
	$(".i18n-admin-tab-password-setting-length-msg1").text(i18next.t('admin.tab_password_setting_length_msg1'));
	$(".i18n-admin-tab-password-setting-length-msg2").text(i18next.t('admin.tab_password_setting_length_msg2'));
	$(".i18n-admin-tab-password-setting-special-help").text(i18next.t('admin.tab_password_setting_special_help'));
	$(".i18n-admin-tab-password-setting-number-help").text(i18next.t('admin.tab_password_setting_number_help'));
	$(".i18n-admin-tab-password-setting-pwd-chk-help").text(i18next.t('admin.tab_password_setting_pwd_chk_help'));
	$(".i18n-admin-tab-password-setting-pwd-unchk-help").text(i18next.t('admin.tab_password_setting_unchk_help'));
	$(".i18n-admin-tab-password-setting-complate-help").text(i18next.t('admin.tab_password_setting_complate_help'));
	
	//user
	$(".i18n-user-help").text(i18next.t('user.help'));
	$(".i18n-user-location-1depth").text(i18next.t('user.location_1depth'));
	$(".i18n-user-location-2depth").text(i18next.t('user.location_2depth'));
	$(".i18n-user-total").text(i18next.t('user.total'));
	$(".i18n-user-count").text(i18next.t('user.count'));
	$(".i18n-user-btn-add").text(i18next.t('user.btn_add'));
	$(".i18n-user-btn-submit").text(i18next.t('user.btn_submit'));
	$(".i18n-user-btn-update").text(i18next.t('user.btn_update'));
	$(".i18n-user-btn-modify").text(i18next.t('user.btn_modify'));
	$(".i18n-user-btn-delete").text(i18next.t('user.btn_delete'));
	$(".i18n-user-btn-modify-title").text(i18next.t('user.btn_modify_title'));
	$(".i18n-user-btn-delete-title").text(i18next.t('user.btn_delete_title'));
	$(".i18n-user-btn-close").text(i18next.t('user.btn_close'));
	$(".i18n-user-btn-add-group").text(i18next.t('user.btn_add_group'));
	$(".i18n-user-btn-add-user").text(i18next.t('user.btn_add_user'));
	$(".i18n-user-add-user-modify").text(i18next.t('user.add_user_modify'));
	$(".i18n-user-edit-user-modify").text(i18next.t('user.edit_user_modify'));
	$(".i18n-user-list-name").text(i18next.t('user.list_name'));
	$(".i18n-user-list-group-name").text(i18next.t('user.list_group_name'));
	$(".i18n-user-list-id").text(i18next.t('user.list_id'));
	$(".i18n-user-list-modify").text(i18next.t('user.list_modify'));
	$(".i18n-user-organization").text(i18next.t('user.organization'));
	$(".i18n-user-list-register-date").text(i18next.t('user.list_register_date'));
	$(".i18n-user-modal-add-user-inidividual").text(i18next.t('user.modal_add_user_inidividual'));
	$(".i18n-user-modal-add-user-bundle").text(i18next.t('user.modal_add_user_bundle'));
	$(".i18n-user-modal-add-user-sample-down").text(i18next.t('user.modal_add_user_sample_down'));
	$(".i18n-user-modal-name").text(i18next.t('user.modal_name'));
	$(".i18n-user-modal-group-name").text(i18next.t('user.modal_group_name'));
	$(".i18n-user-modal-id").text(i18next.t('user.modal_id'));
	$(".i18n-user-modal-password").text(i18next.t('user.modal_password'));
	$(".i18n-user-modal-password2").text(i18next.t('user.modal_password2'));
	$(".i18n-user-modal-register-date").text(i18next.t('user.modal_register_date'));
	$(".i18n-user-modal-list-modify-date").text(i18next.t('user.modal_last_modify_date'));
	$(".i18n-user-modal-group-manager").text(i18next.t('user.modal_group_manager'));
	$(".i18n-user-modal-modify-group").text(i18next.t('user.modal_modify_group'));
	$(".i18n-user-modal-del-title").text(i18next.t('user.modal_del_title'));
	$(".i18n-user-modal-del-body").text(i18next.t('user.modal_del_body'));
	$(".i18n-user-default-group-name").text(i18next.t('user.default_group_name'));

	//equipment
	$(".i18n-equipment-help").text(i18next.t('equipment.help'));
	$(".i18n-equipment-location-1depth").text(i18next.t('equipment.location_1depth'));
	$(".i18n-equipment-location-2depth").text(i18next.t('equipment.location_2depth'));
	$(".i18n-equipment-total").text(i18next.t('equipment.total'));
	$(".i18n-equipment-count").text(i18next.t('equipment.count'));
	$(".i18n-equipment-btn-add").text(i18next.t('equipment.btn_add'));
	$(".i18n-equipment-btn-submit").text(i18next.t('equipment.btn_submit'));
	$(".i18n-equipment-btn-close").text(i18next.t('equipment.btn_close'));
	$(".i18n-equipment-edit-title").attr('title',i18next.t('equipment.edit_title'));
	$(".i18n-equipment-delete-title").attr('title',i18next.t('equipment.delete_title'));
	$(".i18n-equipment-search-placeholder").attr('placeholder',i18next.t('equipment.search_placeholder'));
	$(".i18n-equipment-list-name").text(i18next.t('equipment.list_name'));
	$(".i18n-equipment-list-ip").text(i18next.t('equipment.list_ip'));
	$(".i18n-equipment-list-port").text(i18next.t('equipment.list_port'));
	$(".i18n-equipment-list-edit").text(i18next.t('equipment.list_edit'));
	$(".i18n-equipment-add-modal-title").text(i18next.t('equipment.add_modal_title'));
	$(".i18n-equipment-add-modal-name").text(i18next.t('equipment.add_modal_name'));
	$(".i18n-equipment-add-modal-ip").text(i18next.t('equipment.add_modal_ip'));
	$(".i18n-equipment-add-modal-port").text(i18next.t('equipment.add_modal_port'));
	$(".i18n-equipment-add-modal-master").text(i18next.t('equipment.add_modal_master'));
	$(".i18n-equipment-add-modal-sub").text(i18next.t('equipment.add_modal_sub'));
	$(".i18n-equipment-list-serial").text(i18next.t('equipment.list_serial'));
	$(".i18n-equipment-list-default").text(i18next.t('equipment.list_default'));
	$(".i18n-equipment-list-token").text(i18next.t('equipment.list_token'));
	$(".i18n-equipment-list-mngr-url").text(i18next.t('equipment.list_mngr_url'));
	$(".i18n-equipment-list-seg-url").text(i18next.t('equipment.list_seg_url'));
	$(".i18n-equipment-update-modal-title").text(i18next.t('equipment.update_modal_title'));
	$(".i18n-equipment-delete-modal-title").text(i18next.t('equipment.delete_modal_title'));
	$(".i18n-equipment-delete-modal-msg").text(i18next.t('equipment.delete_modal_msg'));
	$(".i18n-equipment-add-update-modal-help").text(i18next.t('equipment.add_update_modal_help'));
	
	//license
	$(".i18n-license-help").text(i18next.t('license.help'));
	$(".i18n-license-location-1depth").text(i18next.t('license.location_1depth'));
	$(".i18n-license-location-2depth").text(i18next.t('license.location_2depth'));
	$(".i18n-license-btn-submit").text(i18next.t('license.btn_submit'));
	$(".i18n-license-list-company-name").text(i18next.t('license.list_company_name'));
	$(".i18n-license-list-version").text(i18next.t('license.list_version'));
	$(".i18n-license-list-serial").text(i18next.t('license.list_serial'));
	$(".i18n-license-list-validDate").text(i18next.t('license.list_validDate'));
	$(".i18n-license-list-mac").text(i18next.t('license.list_mac'));
	$(".i18n-license-list-ip").text(i18next.t('license.list_ip'));
	$(".i18n-license-list-maxUser").text(i18next.t('license.list_maxUser'));
	$(".i18n-license-list-openSources").text(i18next.t('license.list_openSources'));
	$(".i18n-license-list-copyright-info").text(i18next.t('license.list_copyright_info'));
	$(".i18n-license-list-license-update").text(i18next.t('license.list_license_update'));
	$(".i18n-license-list-period").text(i18next.t('license.list_period'));
	$(".i18n-license-list-default-lang").text(i18next.t('license.list_default_lang'));
	$(".i18n-license-select-file").text(i18next.t('license.select_file'));
	
	//spamPolicy
	$(".i18n-spamPolicy-help").text(i18next.t('spamPolicy.help'));
	$(".i18n-spamPolicy-location-1depth").text(i18next.t('spamPolicy.location_1depth'));
	$(".i18n-spamPolicy-location-2depth").text(i18next.t('spamPolicy.location_2depth'));
	$(".i18n-spamPolicy-btn-add").text(i18next.t('spamPolicy.btn_add'));
	$(".i18n-spamPolicy-btn-del").text(i18next.t('spamPolicy.btn_del'));
	$(".i18n-spamPolicy-btn-close").text(i18next.t('spamPolicy.btn_close'));
	$(".i18n-spamPolicy-btn-submit").text(i18next.t('spamPolicy.btn_submit'));
	
	$(".i18n-spamPolicy-etc-string").text(i18next.t('spamPolicy.etc_string'));
	$(".i18n-spamPolicy-tab-subject-list").text(i18next.t('spamPolicy.tab_subject_list'));
	
	$(".i18n-spamPolicy-tab-common").text(i18next.t('spamPolicy.tab_common'));
	$(".i18n-spamPolicy-tab-grey-listing").text(i18next.t('spamPolicy.tab_grey_listing'));
	$(".i18n-spamPolicy-tab-rbl").text(i18next.t('spamPolicy.tab_rbl'));
	$(".i18n-spamPolicy-tab-spf").text(i18next.t('spamPolicy.tab_spf'));
	$(".i18n-spamPolicy-tab-scam").text(i18next.t('spamPolicy.tab_scam'));
	$(".i18n-spamPolicy-tab-helo").text(i18next.t('spamPolicy.tab_helo'));
	$(".i18n-spamPolicy-tab-sender").text(i18next.t('spamPolicy.tab_sender'));
	$(".i18n-spamPolicy-tab-recver").text(i18next.t('spamPolicy.tab_recver'));
	$(".i18n-spamPolicy-tab-relay").text(i18next.t('spamPolicy.tab_relay'));
	$(".i18n-spamPolicy-tab-contents").text(i18next.t('spamPolicy.tab_contents'));
	
	$(".i18n-spamPolicy-tab-common-help").text(i18next.t('spamPolicy.tab_common_help'));
	$(".i18n-spamPolicy-tab-grey-listing-help").text(i18next.t('spamPolicy.tab_grey_listing_help'));
	$(".i18n-spamPolicy-tab-rbl-help").text(i18next.t('spamPolicy.tab_rbl_help'));
	$(".i18n-spamPolicy-tab-spf-help").text(i18next.t('spamPolicy.tab_spf_help'));
	$(".i18n-spamPolicy-tab-scam-help").text(i18next.t('spamPolicy.tab_scam_help'));
	$(".i18n-spamPolicy-tab-helo-help").text(i18next.t('spamPolicy.tab_helo_help'));
	$(".i18n-spamPolicy-tab-sender-help").text(i18next.t('spamPolicy.tab_sender_help'));
	$(".i18n-spamPolicy-tab-recver-help").text(i18next.t('spamPolicy.tab_recver_help'));
	$(".i18n-spamPolicy-tab-relay-help").text(i18next.t('spamPolicy.tab_relay_help'));
	$(".i18n-spamPolicy-tab-contents-help").text(i18next.t('spamPolicy.tab_contents_help'));
	
	$(".i18n-spamPolicy-tab-exception").text(i18next.t('spamPolicy.tab_exception'));
	$(".i18n-spamPolicy-tab-exception-help").text(i18next.t('spamPolicy.tab_exception_help'));
	$(".i18n-spamPolicy-tab-exception-list-date").text(i18next.t('spamPolicy.tab_exception_list_date'));
	$(".i18n-spamPolicy-tab-exception-list-all").text(i18next.t('spamPolicy.tab_exception_list_all'));
	$(".i18n-spamPolicy-tab-exception-list-division").text(i18next.t('spamPolicy.tab_exception_list_division'));
	$(".i18n-spamPolicy-tab-exception-list-rule-name").text(i18next.t('spamPolicy.tab_exception_list_rule_name'));
	$(".i18n-spamPolicy-tab-exception-list-filter").text(i18next.t('spamPolicy.tab_exception_list_filter'));
	$(".i18n-spamPolicy-tab-exception-list-process").text(i18next.t('spamPolicy.tab_exception_list_process'));
	$(".i18n-spamPolicy-tab-exception-list-register").text(i18next.t('spamPolicy.tab_exception_list_register'));
	$(".i18n-spamPolicy-tab-exception-list-range").text(i18next.t('spamPolicy.tab_exception_list_range'));
	$(".i18n-spamPolicy-tab-exception-list-target-type").text(i18next.t('spamPolicy.tab_exception_list_target_type'));
	$(".i18n-spamPolicy-tab-exception-list-etc").text(i18next.t('spamPolicy.tab_exception_list_etc'));
	$(".i18n-spamPolicy-tab-exception-add-modal-title").text(i18next.t('spamPolicy.tab_exception_add_modal_title'));
	$(".i18n-spamPolicy-tab-exception-add-modal-rule-name").text(i18next.t('spamPolicy.tab_exception_add_modal_rule_name'));
	$(".i18n-spamPolicy-tab-exception-add-modal-bound").text(i18next.t('spamPolicy.tab_exception_add_modal_bound'));
	$(".i18n-spamPolicy-tab-exception-add-modal-filter").text(i18next.t('spamPolicy.tab_exception_add_modal_filter'));
	$(".i18n-spamPolicy-tab-exception-add-modal-filter-ip").text(i18next.t('spamPolicy.tab_exception_add_modal_filter_ip'));
	$(".i18n-spamPolicy-tab-exception-add-modal-filter-sender").text(i18next.t('spamPolicy.tab_exception_add_modal_filter_sender'));
	$(".i18n-spamPolicy-tab-exception-add-modal-filter-recver").text(i18next.t('spamPolicy.tab_exception_add_modal_filter_recver'));
	$(".i18n-spamPolicy-tab-exception-add-modal-filter2-or").text(i18next.t('spamPolicy.tab_exception_add_modal_filter2_or'));
	$(".i18n-spamPolicy-tab-exception-add-modal-filter2-and").text(i18next.t('spamPolicy.tab_exception_add_modal_filter2_and'));
	$(".i18n-spamPolicy-tab-exception-add-modal-filter2-start").text(i18next.t('spamPolicy.tab_exception_add_modal_filter2_start'));
	$(".i18n-spamPolicy-tab-exception-add-modal-filter2-end").text(i18next.t('spamPolicy.tab_exception_add_modal_filter2_end'));
	$(".i18n-spamPolicy-tab-exception-add-modal-ingore").text(i18next.t('spamPolicy.tab_exception_add_modal_ingore'));
	$(".i18n-spamPolicy-tab-exception-add-modal-ingore-true").text(i18next.t('spamPolicy.tab_exception_add_modal_ingore_true'));
	$(".i18n-spamPolicy-tab-exception-add-modal-ingore-false").text(i18next.t('spamPolicy.tab_exception_add_modal_ingore_false'));
	$(".i18n-spamPolicy-tab-exception-add-modal-process").text(i18next.t('spamPolicy.tab_exception_add_modal_process'));
	$(".i18n-spamPolicy-tab-exception-add-modal-process-label-switch-on").text(i18next.t('spamPolicy.tab_exception_add_modal_process_label_switch_on'));
	$(".i18n-spamPolicy-tab-exception-add-modal-process-label-switch-off").text(i18next.t('spamPolicy.tab_exception_add_modal_process_label_switch_off'));
	$(".i18n-spamPolicy-tab-exception-add-modal-register").text(i18next.t('spamPolicy.tab_exception_add_modal_register'));
	$(".i18n-spamPolicy-tab-exception-add-modal-range").text(i18next.t('spamPolicy.tab_exception_add_modal_range'));
	$(".i18n-spamPolicy-tab-exception-add-modal-add-range").text(i18next.t('spamPolicy.tab_exception_add_modal_add_range'));
	$(".i18n-spamPolicy-tab-exception-add-modal-range-label-switch-on").text(i18next.t('spamPolicy.tab_exception_add_modal_range_label_switch_on'));
	$(".i18n-spamPolicy-tab-exception-add-modal-range-label-switch-off").text(i18next.t('spamPolicy.tab_exception_add_modal_range_label_switch_off'));
	$(".i18n-spamPolicy-tab-exception-update-modal-title").text(i18next.t('spamPolicy.tab_exception_update_modal_title'));
	$(".i18n-spamPolicy-tab-exception-update-modal-rule-name").text(i18next.t('spamPolicy.tab_exception_update_modal_rule_name'));
	$(".i18n-spamPolicy-tab-exception-update-modal-filter").text(i18next.t('spamPolicy.tab_exception_update_modal_filter'));
	$(".i18n-spamPolicy-tab-exception-update-modal-filter-ip").text(i18next.t('spamPolicy.tab_exception_update_modal_filter_ip'));
	$(".i18n-spamPolicy-tab-exception-update-modal-filter-domain").text(i18next.t('spamPolicy.tab_exception_update_modal_filter_domain'));
	$(".i18n-spamPolicy-tab-exception-update-modal-filter-email").text(i18next.t('spamPolicy.tab_exception_update_modal_filter_email'));
	$(".i18n-spamPolicy-tab-exception-update-modal-process").text(i18next.t('spamPolicy.tab_exception_update_modal_process'));
	$(".i18n-spamPolicy-tab-exception-update-modal-process-label-switch-on").text(i18next.t('spamPolicy.tab_exception_update_modal_process_label_switch_on'));
	$(".i18n-spamPolicy-tab-exception-update-modal-process-label-switch-off").text(i18next.t('spamPolicy.tab_exception_update_modal_process_label_switch_off'));
	$(".i18n-spamPolicy-tab-exception-update-modal-range").text(i18next.t('spamPolicy.tab_exception_update_modal_range'));
	$(".i18n-spamPolicy-tab-exception-update-modal-range-label-switch-on").text(i18next.t('spamPolicy.tab_exception_update_modal_range_label_switch_on'));
	$(".i18n-spamPolicy-tab-exception-update-modal-range-label-switch-off").text(i18next.t('spamPolicy.tab_exception_update_modal_range_label_switch_off'));
	$(".i18n-spamPolicy-tab-exception-user-modal-title").text(i18next.t('spamPolicy.tab_exception_user_modal_title'));
	
	$(".i18n-spamPolicy-tab-block").text(i18next.t('spamPolicy.tab_block'));
	$(".i18n-spamPolicy-tab-block-help").text(i18next.t('spamPolicy.tab_block_help'));
	$(".i18n-spamPolicy-tab-block-add-modal-title").text(i18next.t('spamPolicy.tab_block_add_modal_title'));
	$(".i18n-spamPolicy-tab-block-update-modal-title").text(i18next.t('spamPolicy.tab_block_update_modal_title'));
	
	$(".i18n-spamPolicy-tab-smtp").text(i18next.t('spamPolicy.tab_smtp'));
	$(".i18n-spamPolicy-tab-smtp-help").text(i18next.t('spamPolicy.tab_smtp_help'));
	$(".i18n-spamPolicy-tab-smtp-default-setting").text(i18next.t('spamPolicy.tab_smtp_default_setting'));
	$(".i18n-spamPolicy-tab-smtp-sender-domain").text(i18next.t('spamPolicy.tab_smtp_sender_domain'));
	$(".i18n-spamPolicy-tab-smtp-sender-domain-label-switch-on").text(i18next.t('spamPolicy.tab_smtp_sender_domain_label_switch_on'));
	$(".i18n-spamPolicy-tab-smtp-sender-domain-label-switch-off").text(i18next.t('spamPolicy.tab_smtp_sender_domain_label_switch_off'));
	$(".i18n-spamPolicy-tab-smtp-recver-domain").text(i18next.t('spamPolicy.tab_smtp_recver_domain'));
	$(".i18n-spamPolicy-tab-smtp-recver-domain-label-switch-on").text(i18next.t('spamPolicy.tab_smtp_recver_domain_label_switch_on'));
	$(".i18n-spamPolicy-tab-smtp-recver-domain-label-switch-off").text(i18next.t('spamPolicy.tab_smtp_recver_domain_label_switch_off'));
	$(".i18n-spamPolicy-tab-smtp-helo-domain").text(i18next.t('spamPolicy.tab_smtp_helo_domain'));
	$(".i18n-spamPolicy-tab-smtp-helo-domain-label-switch-on").text(i18next.t('spamPolicy.tab_smtp_helo_domain_label_switch_on'));
	$(".i18n-spamPolicy-tab-smtp-helo-domain-label-switch-off").text(i18next.t('spamPolicy.tab_smtp_helo_domain_label_switch_off'));
	$(".i18n-spamPolicy-tab-smtp-domain").text(i18next.t('spamPolicy.tab_smtp_domain'));
	$(".i18n-spamPolicy-tab-smtp-domain-label-switch-on").text(i18next.t('spamPolicy.tab_smtp_domain_label_switch_on'));
	$(".i18n-spamPolicy-tab-smtp-domain-label-switch-off").text(i18next.t('spamPolicy.tab_smtp_domain_label_switch_off'));
	$(".i18n-spamPolicy-tab-smtp-spf").text(i18next.t('spamPolicy.tab_smtp_spf'));
	$(".i18n-spamPolicy-tab-smtp-spf-label-switch-on").text(i18next.t('spamPolicy.tab_smtp_spf_label_switch_on'));
	$(".i18n-spamPolicy-tab-smtp-spf-label-switch-off").text(i18next.t('spamPolicy.tab_smtp_spf_label_switch_off'));
	$(".i18n-spamPolicy-tab-smtp-spf-not-set-reject").text(i18next.t('spamPolicy.tab_smtp_spf_not_set_reject'));
	$(".i18n-spamPolicy-tab-smtp-rbl").text(i18next.t('spamPolicy.tab_smtp_rbl'));
	$(".i18n-spamPolicy-tab-smtp-rbl-label-switch-on").text(i18next.t('spamPolicy.tab_smtp_rbl_label_switch_on'));
	$(".i18n-spamPolicy-tab-smtp-rbl-label-switch-off").text(i18next.t('spamPolicy.tab_smtp_rbl_label_switch_off'));
	$(".i18n-spamPolicy-tab-smtp-rbl-list-date").text(i18next.t('spamPolicy.tab_smtp_rbl_list_date'));
	$(".i18n-spamPolicy-tab-smtp-rbl-list-site").text(i18next.t('spamPolicy.tab_smtp_rbl_list_site'));
	$(".i18n-spamPolicy-tab-smtp-rbl-list-register").text(i18next.t('spamPolicy.tab_smtp_rbl_list_register'));
	$(".i18n-spamPolicy-tab-smtp-rbl-list-update-del").text(i18next.t('spamPolicy.tab_smtp_rbl_list_update_del'));
	$(".i18n-spamPolicy-tab-smtp-rbl-add-modal-title").text(i18next.t('spamPolicy.tab_smtp_rbl_add_modal_title'));
	$(".i18n-spamPolicy-tab-smtp-rbl-update-modal-title").text(i18next.t('spamPolicy.tab_smtp_rbl_update_modal_title'));
	$(".i18n-spamPolicy-tab-smtp-sender").text(i18next.t('spamPolicy.tab_smtp_sender'));
	$(".i18n-spamPolicy-tab-smtp-sender-setting").text(i18next.t('spamPolicy.tab_smtp_sender_setting'));
	$(".i18n-spamPolicy-tab-smtp-sender-label-switch-on").text(i18next.t('spamPolicy.tab_smtp_sender_label_switch_on'));
	$(".i18n-spamPolicy-tab-smtp-sender-label-switch-off").text(i18next.t('spamPolicy.tab_smtp_sender_label_switch_off'));
	$(".i18n-spamPolicy-tab-smtp-sender-list-date").text(i18next.t('spamPolicy.tab_smtp_sender_list_date'));
	$(".i18n-spamPolicy-tab-smtp-sender-list-sender").text(i18next.t('spamPolicy.tab_smtp_sender_list_sender'));
	$(".i18n-spamPolicy-tab-smtp-sender-list-register").text(i18next.t('spamPolicy.tab_smtp_sender_list_register'));
	$(".i18n-spamPolicy-tab-smtp-sender-list-update-del").text(i18next.t('spamPolicy.tab_smtp_sender_list_update_del'));
	$(".i18n-spamPolicy-tab-smtp-sender-list-email").text(i18next.t('spamPolicy.tab_smtp_sender_list_email'));
	$(".i18n-spamPolicy-tab-smtp-recver").text(i18next.t('spamPolicy.tab_smtp_recver'));
	$(".i18n-spamPolicy-tab-smtp-recver-setting").text(i18next.t('spamPolicy.tab_smtp_recver_setting'));
	$(".i18n-spamPolicy-tab-smtp-recver-label-switch-on").text(i18next.t('spamPolicy.tab_smtp_recver_label_switch_on'));
	$(".i18n-spamPolicy-tab-smtp-recver-label-switch-off").text(i18next.t('spamPolicy.tab_smtp_recver_label_switch_off'));
	$(".i18n-spamPolicy-tab-smtp-recver-list-date").text(i18next.t('spamPolicy.tab_smtp_recver_list_date'));
	$(".i18n-spamPolicy-tab-smtp-recver-list-recver").text(i18next.t('spamPolicy.tab_smtp_recver_list_recver'));
	$(".i18n-spamPolicy-tab-smtp-recver-list-register").text(i18next.t('spamPolicy.tab_smtp_recver_list_register'));
	$(".i18n-spamPolicy-tab-smtp-recver-list-update-del").text(i18next.t('spamPolicy.tab_smtp_recver_list_update_del'));
	$(".i18n-spamPolicy-tab-smtp-recver-list-email").text(i18next.t('spamPolicy.tab_smtp_recver_list_email'));
	$(".i18n-spamPolicy-tab-smtp-limit-recv").text(i18next.t('spamPolicy.tab_smtp_limit_recv'));
	$(".i18n-spamPolicy-tab-smtp-limit-recv-help").text(i18next.t('spamPolicy.tab_smtp_limit_recv_help'));
	$(".i18n-spamPolicy-tab-smtp-msg-size").text(i18next.t('spamPolicy.tab_smtp_msg_size'));
	$(".i18n-spamPolicy-tab-smtp-msg-size-help").text(i18next.t('spamPolicy.tab_smtp_msg_size_help'));
	$(".i18n-spamPolicy-tab-smtp-limit-waypoint-server").text(i18next.t('spamPolicy.tab_smtp_limit_waypoint_server'));
	$(".i18n-spamPolicy-tab-smtp-limit-waypoint-server-help").text(i18next.t('spamPolicy.tab_smtp_limit_waypoint_server_help'));
	$(".i18n-spamPolicy-tab-smtp-account-check").text(i18next.t('spamPolicy.tab_smtp_account_check'));
	$(".i18n-spamPolicy-tab-smtp-relay-inspection").text(i18next.t('spamPolicy.tab_smtp_relay_inspection'));
	$(".i18n-spamPolicy-tab-smtp-relay-inspection-item1").text(i18next.t('spamPolicy.tab_smtp_relay_inspection_item1'));
	$(".i18n-spamPolicy-tab-smtp-relay-inspection-item2").text(i18next.t('spamPolicy.tab_smtp_relay_inspection_item2'));
	$(".i18n-spamPolicy-tab-smtp-relay-inspection-item3").text(i18next.t('spamPolicy.tab_smtp_relay_inspection_item3'));
	$(".i18n-spamPolicy-tab-smtp-relay-inspection-item4").text(i18next.t('spamPolicy.tab_smtp_relay_inspection_item4'));
	
	$(".i18n-spamPolicy-tab-pattern").text(i18next.t('spamPolicy.tab_pattern'));
	$(".i18n-spamPolicy-tab-pattern-help").text(i18next.t('spamPolicy.tab_pattern_help'));
	$(".i18n-spamPolicy-tab-pattern-usage").text(i18next.t('spamPolicy.tab_pattern_usage'));
	$(".i18n-spamPolicy-tab-pattern-usage-label-switch-on").text(i18next.t('spamPolicy.tab_pattern_usage_label_switch_on'));
	$(".i18n-spamPolicy-tab-pattern-usage-label-switch-off").text(i18next.t('spamPolicy.tab_pattern_usage_label_switch_off'));
	$(".i18n-spamPolicy-tab-pattern-version").text(i18next.t('spamPolicy.tab_pattern_version'));
	$(".i18n-spamPolicy-tab-pattern-update-time").text(i18next.t('spamPolicy.tab_pattern_update_time'));
	
	$(".i18n-spamPolicy-tab-content").text(i18next.t('spamPolicy.tab_content'));
	$(".i18n-spamPolicy-tab-content-help").text(i18next.t('spamPolicy.tab_content_help'));
	$(".i18n-spamPolicy-tab-content-usage").text(i18next.t('spamPolicy.tab_content_usage'));
	$(".i18n-spamPolicy-tab-content-usage-label-switch-on").text(i18next.t('spamPolicy.tab_content_usage_label_switch_on'));
	$(".i18n-spamPolicy-tab-content-usage-label-switch-off").text(i18next.t('spamPolicy.tab_content_usage_label_switch_off'));
	$(".i18n-spamPolicy-tab-content-etc").text(i18next.t('spamPolicy.tab_content_etc'));
	$(".i18n-spamPolicy-tab-content-search-all").text(i18next.t('spamPolicy.tab_content_search_all'));
	$(".i18n-spamPolicy-tab-content-search-name").text(i18next.t('spamPolicy.tab_content_search_name'));
	$(".i18n-spamPolicy-tab-content-search-info").text(i18next.t('spamPolicy.tab_content_search_info'));
	$(".i18n-spamPolicy-tab-content-search-register").text(i18next.t('spamPolicy.tab_content_search_register'));
	$(".i18n-spamPolicy-tab-content-search-time").text(i18next.t('spamPolicy.tab_content_search_time'));
	$(".i18n-spamPolicy-tab-content-search-object").text(i18next.t('spamPolicy.tab_content_search_object'));
	$(".i18n-spamPolicy-tab-content-search-rule").text(i18next.t('spamPolicy.tab_content_search_rule'));
	$(".i18n-spamPolicy-tab-content-search-usage").text(i18next.t('spamPolicy.tab_content_search_usage'));
	$(".i18n-spamPolicy-tab-content-list-name").text(i18next.t('spamPolicy.tab_content_list_name'));
	$(".i18n-spamPolicy-tab-content-list-info").text(i18next.t('spamPolicy.tab_content_list_info'));
	$(".i18n-spamPolicy-tab-content-list-mail-type").text(i18next.t('spamPolicy.tab_content_list_mail_type'));
	$(".i18n-spamPolicy-tab-content-list-register").text(i18next.t('spamPolicy.tab_content_list_register'));
	$(".i18n-spamPolicy-tab-content-list-time").text(i18next.t('spamPolicy.tab_content_list_time'));
	$(".i18n-spamPolicy-tab-content-list-object").text(i18next.t('spamPolicy.tab_content_list_object'));
	$(".i18n-spamPolicy-tab-content-list-rule").text(i18next.t('spamPolicy.tab_content_list_rule'));
	$(".i18n-spamPolicy-tab-content-list-usage").text(i18next.t('spamPolicy.tab_content_list_usage'));
	$(".i18n-spamPolicy-tab-content-add-modal-title").text(i18next.t('spamPolicy.tab_content_add_modal_title'));
	$(".i18n-spamPolicy-tab-content-add-modal-name").text(i18next.t('spamPolicy.tab_content_add_modal_name'));
	$(".i18n-spamPolicy-tab-content-add-modal-if1").text(i18next.t('spamPolicy.tab_content_add_modal_if1'));
	$(".i18n-spamPolicy-tab-content-add-modal-if1-subject").text(i18next.t('spamPolicy.tab_content_add_modal_if1_subject'));
	$(".i18n-spamPolicy-tab-content-add-modal-if1-url").text(i18next.t('spamPolicy.tab_content_add_modal_if1_url'));
	$(".i18n-spamPolicy-tab-content-add-modal-if1-sender-env").text(i18next.t('spamPolicy.tab_content_add_modal_if1_sender_env'));
	$(".i18n-spamPolicy-tab-content-add-modal-if1-recver-env").text(i18next.t('spamPolicy.tab_content_add_modal_if1_recver_env'));
	$(".i18n-spamPolicy-tab-content-add-modal-if1-sender-head").text(i18next.t('spamPolicy.tab_content_add_modal_if1_sender_head'));
	$(".i18n-spamPolicy-tab-content-add-modal-if1-recver-head").text(i18next.t('spamPolicy.tab_content_add_modal_if1_recver_head'));
	$(".i18n-spamPolicy-tab-content-add-modal-if1-cc").text(i18next.t('spamPolicy.tab_content_add_modal_if1_cc'));
	$(".i18n-spamPolicy-tab-content-add-modal-if1-total-header").text(i18next.t('spamPolicy.tab_content_add_modal_if1_total_header'));
	$(".i18n-spamPolicy-tab-content-add-modal-if1-header").text(i18next.t('spamPolicy.tab_content_add_modal_if1_header'));
	$(".i18n-spamPolicy-tab-content-add-modal-if1-content-type").text(i18next.t('spamPolicy.tab_content_add_modal_if1_content_type'));
	$(".i18n-spamPolicy-tab-content-add-modal-if1-content").text(i18next.t('spamPolicy.tab_content_add_modal_if1_content'));
	$(".i18n-spamPolicy-tab-content-add-modal-if1-mail-size").text(i18next.t('spamPolicy.tab_content_add_modal_if1_mail_size'));
	$(".i18n-spamPolicy-tab-content-add-modal-if1-ip").text(i18next.t('spamPolicy.tab_content_add_modal_if1_ip'));
	$(".i18n-spamPolicy-tab-content-add-modal-if1-file-name").text(i18next.t('spamPolicy.tab_content_add_modal_if1_file_name'));
	$(".i18n-spamPolicy-tab-content-add-modal-if1-file-content").text(i18next.t('spamPolicy.tab_content_add_modal_if1_file_content'));
	$(".i18n-spamPolicy-tab-content-add-modal-if1-smtp-id").text(i18next.t('spamPolicy.tab_content_add_modal_if1_smtp_id'));
	$(".i18n-spamPolicy-tab-content-add-modal-if1-country").text(i18next.t('spamPolicy.tab_content_add_modal_if1_country'));
	$(".i18n-spamPolicy-tab-content-add-modal-if1-extension").text(i18next.t('spamPolicy.tab_content_add_modal_if1_extension'));
	$(".i18n-spamPolicy-tab-content-add-modal-if2-include").text(i18next.t('spamPolicy.tab_content_add_modal_if2_include'));
	$(".i18n-spamPolicy-tab-content-add-modal-if2-not-include").text(i18next.t('spamPolicy.tab_content_add_modal_if2_not_include'));
	$(".i18n-spamPolicy-tab-content-add-modal-if2-same").text(i18next.t('spamPolicy.tab_content_add_modal_if2_same'));
	$(".i18n-spamPolicy-tab-content-add-modal-if2-not-same").text(i18next.t('spamPolicy.tab_content_add_modal_if2_not_same'));
	$(".i18n-spamPolicy-tab-content-add-modal-if2-start").text(i18next.t('spamPolicy.tab_content_add_modal_if2_start'));
	$(".i18n-spamPolicy-tab-content-add-modal-if2-not-start").text(i18next.t('spamPolicy.tab_content_add_modal_if2_not_start'));
	$(".i18n-spamPolicy-tab-content-add-modal-if2-end").text(i18next.t('spamPolicy.tab_content_add_modal_if2_end'));
	$(".i18n-spamPolicy-tab-content-add-modal-if2-not-end").text(i18next.t('spamPolicy.tab_content_add_modal_if2_not_end'));
	$(".i18n-spamPolicy-tab-content-add-modal-if2-fit").text(i18next.t('spamPolicy.tab_content_add_modal_if2_fit'));
	$(".i18n-spamPolicy-tab-content-add-modal-if2-not-fit").text(i18next.t('spamPolicy.tab_content_add_modal_if2_not_fit'));
	$(".i18n-spamPolicy-tab-content-add-modal-if2-fit-isCase").text(i18next.t('spamPolicy.tab_content_add_modal_if2_fit_isCase'));
	$(".i18n-spamPolicy-tab-content-add-modal-if2-not-fit-isCase").text(i18next.t('spamPolicy.tab_content_add_modal_if2_not_fit_isCase'));
	$(".i18n-spamPolicy-tab-content-add-modal-if2-not-existence").text(i18next.t('spamPolicy.tab_content_add_modal_if2_not_existence'));
	$(".i18n-spamPolicy-tab-content-add-modal-if2-english").text(i18next.t('spamPolicy.tab_content_add_modal_if2_english'));
	$(".i18n-spamPolicy-tab-content-add-modal-calculate").text(i18next.t('spamPolicy.tab_content_add_modal_calculate'));
	$(".i18n-spamPolicy-tab-content-add-modal-calculate-once").text(i18next.t('spamPolicy.tab_content_add_modal_calculate_once'));
	$(".i18n-spamPolicy-tab-content-add-modal-calculate-all").text(i18next.t('spamPolicy.tab_content_add_modal_calculate_all'));
	$(".i18n-spamPolicy-tab-content-add-modal-mail-class").text(i18next.t('spamPolicy.tab_content_add_modal_mail_class'));
	$(".i18n-spamPolicy-tab-content-add-modal-mail-class-admin").text(i18next.t('spamPolicy.tab_content_add_modal_mail_class_admin'));
	$(".i18n-spamPolicy-tab-content-add-modal-mail-class-spam").text(i18next.t('spamPolicy.tab_content_add_modal_mail_class_spam'));
	$(".i18n-spamPolicy-tab-content-add-modal-mail-class-spammy").text(i18next.t('spamPolicy.tab_content_add_modal_mail_class_spammy'));
	$(".i18n-spamPolicy-tab-content-add-modal-register").text(i18next.t('spamPolicy.tab_content_add_modal_register'));
	$(".i18n-spamPolicy-tab-content-add-modal-date").text(i18next.t('spamPolicy.tab_content_add_modal_date'));
	$(".i18n-spamPolicy-tab-content-add-modal-object").text(i18next.t('spamPolicy.tab_content_add_modal_object'));
	$(".i18n-spamPolicy-tab-content-add-modal-object-label-switch-on").text(i18next.t('spamPolicy.tab_content_add_modal_object_label_switch_on'));
	$(".i18n-spamPolicy-tab-content-add-modal-object-label-switch-off").text(i18next.t('spamPolicy.tab_content_add_modal_object_label_switch_off'));
	$(".i18n-spamPolicy-tab-content-add-modal-rule").text(i18next.t('spamPolicy.tab_content_add_modal_rule'));
	$(".i18n-spamPolicy-tab-content-add-modal-rule-label-switch-on").text(i18next.t('spamPolicy.tab_content_add_modal_rule_label_switch_on'));
	$(".i18n-spamPolicy-tab-content-add-modal-rule-label-switch-off").text(i18next.t('spamPolicy.tab_content_add_modal_rule_label_switch_off'));
	$(".i18n-spamPolicy-tab-content-add-modal-usage").text(i18next.t('spamPolicy.tab_content_add_modal_usage'));
	$(".i18n-spamPolicy-tab-content-add-modal-usage-label-switch-on").text(i18next.t('spamPolicy.tab_content_add_modal_usage_label_switch_on'));
	$(".i18n-spamPolicy-tab-content-add-modal-usage-label-switch-off").text(i18next.t('spamPolicy.tab_content_add_modal_usage_label_switch_off'));
	$(".i18n-spamPolicy-tab-content-update-modal-title").text(i18next.t('spamPolicy.tab_content_update_modal_title'));
	$(".i18n-spamPolicy-tab-process-method").text(i18next.t('spamPolicy.tab_process_method'));
	$(".i18n-spamPolicy-tab-process-method2").text(i18next.t('spamPolicy.tab_process_method2'));
	$(".i18n-spamPolicy-tab-process-method-help").text(i18next.t('spamPolicy.tab_process_method_help'));
	$(".i18n-spamPolicy-tab-process-method-select-option-common").text(i18next.t('spamPolicy.tab_process_method_select_option_common'));
	$(".i18n-spamPolicy-tab-process-method-select-option-default").text(i18next.t('spamPolicy.tab_process_method_select_option_default'));
	$(".i18n-spamPolicy-tab-process-method-select-option-tag").text(i18next.t('spamPolicy.tab_process_method_select_option_tag'));
	$(".i18n-spamPolicy-tab-process-method-select-option-add-header").text(i18next.t('spamPolicy.tab_process_method_select_option_add_header'));
	$(".i18n-spamPolicy-tab-process-method-select-option-subject").text(i18next.t('spamPolicy.tab_process_method_select_option_subject'));
	$(".i18n-spamPolicy-tab-process-method-modify-return").text(i18next.t('spamPolicy.tab_process_method_modify_return'));
	$(".i18n-spamPolicy-tab-process-method-return-policy-name").text(i18next.t('spamPolicy.tab_process_method_return_policy_name'));
	$(".i18n-spamPolicy-tab-process-method-return-default-msg").text(i18next.t('spamPolicy.tab_process_method_return_default_msg'));
	$(".i18n-spamPolicy-tab-process-method-add-header-name").text(i18next.t('spamPolicy.tab_process_method_add_header_name'));
	$(".i18n-spamPolicy-tab-process-method-add-header-value").text(i18next.t('spamPolicy.tab_process_method_add_header_value'));
	
	$(".i18n-spamPolicy-tab-tag-title").text(i18next.t('spamPolicy.tab_tag_title'));
	$(".i18n-spamPolicy-tab-tag-help").text(i18next.t('spamPolicy.tab_tag_help'));
	$(".i18n-spamPolicy-tab-tag-use").text(i18next.t('spamPolicy.tab_tag_use'));
	$(".i18n-spamPolicy-tab-tag-sort").text(i18next.t('spamPolicy.tab_tag_sort'));
	$(".i18n-spamPolicy-tab-tag-type").text(i18next.t('spamPolicy.tab_tag_type'));
	$(".i18n-spamPolicy-tab-tag-type-ip").text(i18next.t('spamPolicy.tab_tag_type_ip'));
	$(".i18n-spamPolicy-tab-tag-type-domain").text(i18next.t('spamPolicy.tab_tag_type_domain'));
	$(".i18n-spamPolicy-tab-tag-type-email").text(i18next.t('spamPolicy.tab_tag_type_email'));
	$(".i18n-spamPolicy-tab-tag-spamTags").text(i18next.t('spamPolicy.tab_tag_spamTags'));
	$(".i18n-spamPolicy-tab-tag-spamTags-item").text(i18next.t('spamPolicy.tab_tag_spamTags_item'));
	$(".i18n-spamPolicy-tab-tag-spamTags-item2").text(i18next.t('spamPolicy.tab_tag_spamTags_item2'));
	$(".i18n-spamPolicy-tab-tag-spamTags-item3").text(i18next.t('spamPolicy.tab_tag_spamTags_item3'));
	$(".i18n-spamPolicy-tab-tag-spamTags-default").text(i18next.t('spamPolicy.tab_tag_spamTags_default'));
	$(".i18n-spamPolicy-tab-tag-spamTags-default-usage").text(i18next.t('spamPolicy.tab_tag_spamTags_default_usage'));
	$(".i18n-spamPolicy-tab-tag-add-spamTags").text(i18next.t('spamPolicy.tab_tag_add_spamTags'));
	$(".i18n-spamPolicy-tab-tag-update-spamTags").text(i18next.t('spamPolicy.tab_tag_update_spamTags'));
	$(".i18n-spamPolicy-tab-tag-rule").text(i18next.t('spamPolicy.tab_tag_rule'));
	$(".i18n-spamPolicy-tab-tag-desc").text(i18next.t('spamPolicy.tab_tag_desc'));
	$(".i18n-spamPolicy-tab-tag-setting").text(i18next.t('spamPolicy.tab_tag_setting'));
	$(".i18n-spamPolicy-tab-tag-select-all").text(i18next.t('spamPolicy.tab_tag_select_all'));
	$(".i18n-spamPolicy-tab-tag-select-rule").text(i18next.t('spamPolicy.tab_tag_select_rule'));
	$(".i18n-spamPolicy-tab-tag-select-desc").text(i18next.t('spamPolicy.tab_tag_select_desc'));
	$(".i18n-spamPolicy-tab-tag-add-rule").text(i18next.t('spamPolicy.tab_tag_add_rule'));
	$(".i18n-spamPolicy-tab-tag-update-rule").text(i18next.t('spamPolicy.tab_tag_update_rule'));
	$(".i18n-spamPolicy-tab-tag-graph").text(i18next.t('spamPolicy.tab_tag_graph'));
	$(".i18n-spamPolicy-tab-tag-cond").text(i18next.t('spamPolicy.tab_tag_cond'));
	$(".i18n-spamPolicy-tab-tag-del-rule").text(i18next.t('spamPolicy.tab_tag_del_rule'));
	$(".i18n-spamPolicy-tab-tag-help2").text(i18next.t('spamPolicy.tab_tag_help2'));
	
	$(".i18n-spamPolicy-tab-tag-delete-msg").text(i18next.t('spamPolicy.tab_tag_delete_msg'));
	$(".i18n-spamPolicy-tab-tag-delete-msg2").text(i18next.t('spamPolicy.tab_tag_delete_msg2'));
	
	$(".i18n-spamPolicy-tab-all-to").text(i18next.t('spamPolicy.tab_all_to'));
	$(".i18n-spamPolicy-tab-all-to2").text(i18next.t('spamPolicy.tab_all_to2'));
	
	$(".i18n-spamPolicyProcessMethod-recver-exist").text(i18next.t('spamPolicyProcessMethod.recver_exist'));
	$(".i18n-spamPolicyProcessMethod-eml-size").text(i18next.t('spamPolicyProcessMethod.eml_size'));
	$(".i18n-spamPolicyProcessMethod-relay").text(i18next.t('spamPolicyProcessMethod.relay'));
	$(".i18n-spamPolicyProcessMethod-spf").text(i18next.t('spamPolicyProcessMethod.spf'));
	$(".i18n-spamPolicyProcessMethod-pattern").text(i18next.t('spamPolicyProcessMethod.pattern'));
	$(".i18n-spamPolicyProcessMethod-sender-domain-resolver").text(i18next.t('spamPolicyProcessMethod.sender_domain_resolver'));
	$(".i18n-spamPolicyProcessMethod-recver-domain-resolver").text(i18next.t('spamPolicyProcessMethod.recver_domain_resolver'));
	$(".i18n-spamPolicyProcessMethod-grey-listing").text(i18next.t('spamPolicyProcessMethod.grey_listing'));
	$(".i18n-spamPolicyProcessMethod-user-reject").text(i18next.t('spamPolicyProcessMethod.user_reject'));
	$(".i18n-spamPolicyProcessMethod-helo-resolver").text(i18next.t('spamPolicyProcessMethod.helo_resolver'));
	$(".i18n-spamPolicyProcessMethod-contents").text(i18next.t('spamPolicyProcessMethod.contents'));
	$(".i18n-spamPolicyProcessMethod-max-hop").text(i18next.t('spamPolicyProcessMethod.max_hop'));
	$(".i18n-spamPolicyProcessMethod-max-recver").text(i18next.t('spamPolicyProcessMethod.max_recver'));
	$(".i18n-spamPolicyProcessMethod-rbl").text(i18next.t('spamPolicyProcessMethod.rbl'));
	$(".i18n-spamPolicyProcessMethod-sender-exist").text(i18next.t('spamPolicyProcessMethod.sender_exist'));
	
	$(".i18n-spamPolicyProcessMethod-sender-domain-method").text(i18next.t('spamPolicyProcessMethod.sender_domain_method'));
	$(".i18n-spamPolicyProcessMethod-sender-exist-method").text(i18next.t('spamPolicyProcessMethod.sender_exist_method'));
	$(".i18n-spamPolicyProcessMethod-recver-domain-method").text(i18next.t('spamPolicyProcessMethod.recver_domain_method'));
	$(".i18n-spamPolicyProcessMethod-recver-exist-method").text(i18next.t('spamPolicyProcessMethod.recver_exist_method'));
	$(".i18n-spamPolicyProcessMethod-recver-max-method").text(i18next.t('spamPolicyProcessMethod.recver_max_method'));
	$(".i18n-spamPolicyProcessMethod-content-eml-size").text(i18next.t('spamPolicyProcessMethod.content_eml_size'));
	$(".i18n-spamPolicyProcessMethod-content-max-hop").text(i18next.t('spamPolicyProcessMethod.content_max_hop'));
	$(".i18n-spamPolicyProcessMethod-content-contents").text(i18next.t('spamPolicyProcessMethod.content_contents'));
	$(".i18n-spamPolicyProcessMethod-content-pattern").text(i18next.t('spamPolicyProcessMethod.content_pattern'));
	
	
	//virusPolicy
	$(".i18n-virusPolicy-help").text(i18next.t('virusPolicy.help'));
	$(".i18n-virusPolicy-location-1depth").text(i18next.t('virusPolicy.location_1depth'));
	$(".i18n-virusPolicy-location-2depth").text(i18next.t('virusPolicy.location_2depth'));
	$(".i18n-virusPolicy-tab-default").text(i18next.t('virusPolicy.tab_default'));
	$(".i18n-virusPolicy-tab-default-help").text(i18next.t('virusPolicy.tab_default_help'));
	$(".i18n-virusPolicy-usage").text(i18next.t('virusPolicy.usage'));
	$(".i18n-virusPolicy-usage-label-switch-on").text(i18next.t('virusPolicy.usage_label_switch_on'));
	$(".i18n-virusPolicy-usage-label-switch-off").text(i18next.t('virusPolicy.usage_label_switch_off'));
	$(".i18n-virusPolicy-version").text(i18next.t('virusPolicy.version'));
	$(".i18n-virusPolicy-update-time").text(i18next.t('virusPolicy.update_time'));
	
	$(".i18n-virusPolicy-vaccine-name").text(i18next.t('virusPolicy.vaccine_name'));
	$(".i18n-virusPolicy-version-info").text(i18next.t('virusPolicy.version_info'));
	$(".i18n-virusPolicy-bd").text(i18next.t('virusPolicy.bd'));
	$(".i18n-virusPolicy-tv").text(i18next.t('virusPolicy.tv'));
	$(".i18n-virusPolicy-file-size-limit").text(i18next.t('virusPolicy.file_size_limit'));
	$(".i18n-virusPolicy-file-size-limit-help").text(i18next.t('virusPolicy.file_size_limit_help'));
	
	$(".i18n-virusPolicy-tab-process-method").text(i18next.t('virusPolicy.tab_process_method'));
	$(".i18n-virusPolicy-tab-process-method2").text(i18next.t('virusPolicy.tab_process_method2'));
	$(".i18n-virusPolicy-tab-process-method-help").text(i18next.t('virusPolicy.tab_process_method_help'));
	$(".i18n-virusPolicy-tab-process-method-help2").text(i18next.t('virusPolicy.tab_process_method_help2'));
	$(".i18n-virusPolicy-tab-process-method-select-option-default").text(i18next.t('virusPolicy.tab_process_method_select_option_default'));
	$(".i18n-virusPolicy-tab-process-method-select-option-del").text(i18next.t('virusPolicy.tab_process_method_select_option_del'));
	$(".i18n-virusPolicy-tab-process-method-select-option-text").text(i18next.t('virusPolicy.tab_process_method_select_option_text'));
	$(".i18n-virusPolicy-tab-process-method-select-option-pass").text(i18next.t('virusPolicy.tab_process_method_select_option_pass'));
	$(".i18n-virusPolicy-tab-process-method-textfile-value").text(i18next.t('virusPolicy.tab_process_method_textfile_value'));
	$(".i18n-virusPolicy-tab-process-method-textfile-name").text(i18next.t('virusPolicy.tab_process_method_textfile_name'));
	$(".i18n-virusPolicy-msg-title").text(i18next.t('virusPolicy.msg_title'));
	$(".i18n-virusPolicy-msg-content").text(i18next.t('virusPolicy.msg_content'));
	
	//cdrPolicy
	$(".i18n-cdrPolicy-help").text(i18next.t('cdrPolicy.help'));
	$(".i18n-cdrPolicy-location-1depth").text(i18next.t('cdrPolicy.location_1depth'));
	$(".i18n-cdrPolicy-location-2depth").text(i18next.t('cdrPolicy.location_2depth'));
	$(".i18n-cdrPolicy-btn-add").text(i18next.t('cdrPolicy.btn_add'));
	$(".i18n-cdrPolicy-btn-close").text(i18next.t('cdrPolicy.btn_close'));
	$(".i18n-cdrPolicy-btn-submit").text(i18next.t('cdrPolicy.btn_submit'));
	$(".i18n-cdrPolicy-tab-usage").text(i18next.t('cdrPolicy.tab_usage'));
	$(".i18n-cdrPolicy-tab-label-switch-on").text(i18next.t('cdrPolicy.tab_label_switch_on'));
	$(".i18n-cdrPolicy-tab-label-switch-off").text(i18next.t('cdrPolicy.tab_label_switch_off'));
	
	//urlPolicy
	$(".i18n-urlPolicy-help").text(i18next.t('urlPolicy.help'));
	$(".i18n-urlPolicy-location-1depth").text(i18next.t('urlPolicy.location_1depth'));
	$(".i18n-urlPolicy-location-2depth").text(i18next.t('urlPolicy.location_2depth'));
	$(".i18n-urlPolicy-tab-usage").text(i18next.t('urlPolicy.tab_usage'));
	$(".i18n-urlPolicy-tab-label-switch-on").text(i18next.t('urlPolicy.tab_label_switch_on'));
	$(".i18n-urlPolicy-tab-label-switch-off").text(i18next.t('urlPolicy.tab_label_switch_off'));
	
	//isolationPolicy
	$(".i18n-isolationPolicy-help").text(i18next.t('isolationPolicy.help'));
	$(".i18n-isolationPolicy-location-1depth").text(i18next.t('isolationPolicy.location_1depth'));
	$(".i18n-isolationPolicy-location-2depth").text(i18next.t('isolationPolicy.location_2depth'));
	$(".i18n-isolationPolicy-tab-usage").text(i18next.t('isolationPolicy.tab_usage'));
	$(".i18n-isolationPolicy-tab-label-switch-on").text(i18next.t('isolationPolicy.tab_label_switch_on'));
	$(".i18n-isolationPolicy-tab-label-switch-off").text(i18next.t('isolationPolicy.tab_label_switch_off'));
	
	//mailBodyPolicy
	$(".i18n-mailBodyPolicy-help").text(i18next.t('mailBodyPolicy.help'));
	$(".i18n-mailBodyPolicy-location-1depth").text(i18next.t('mailBodyPolicy.location_1depth'));
	$(".i18n-mailBodyPolicy-location-2depth").text(i18next.t('mailBodyPolicy.location_2depth'));
	$(".i18n-mailBodyPolicy-switch-on").text(i18next.t('mailBodyPolicy.switch_on'));
	$(".i18n-mailBodyPolicy-switch-off").text(i18next.t('mailBodyPolicy.switch_off'));
	$(".i18n-mailBodyPolicy-switch-reconfiguration").text(i18next.t('mailBodyPolicy.switch_reconfiguration'));
	$(".i18n-mailBodyPolicy-switch-annotation-processing").text(i18next.t('mailBodyPolicy.switch_annotation_processing'));
	$(".i18n-mailBodyPolicy-switch-no-processing").text(i18next.t('mailBodyPolicy.switch_no_processing'));
	$(".i18n-mailBodyPolicy-switch-on-the-go-analysis").text(i18next.t('mailBodyPolicy.switch_on_the_go_analysis'));
	$(".i18n-mailBodyPolicy-switch-removal").text(i18next.t('mailBodyPolicy.switch_removal'));
	$(".i18n-mailBodyPolicy-switch-allow").text(i18next.t('mailBodyPolicy.switch_allow'));
	$(".i18n-mailBodyPolicy-btn-close").text(i18next.t('mailBodyPolicy.btn_close'));
	$(".i18n-mailBodyPolicy-btn-submit").text(i18next.t('mailBodyPolicy.btn_submit'));
	$(".i18n-mailBodyPolicy-select-domain").text(i18next.t('mailBodyPolicy.select_domain'));
	
	$(".i18n-mailBodyPolicy-tab-html").text(i18next.t('mailBodyPolicy.tab_html'));
	$(".i18n-mailBodyPolicy-tab-html-banner").text(i18next.t('mailBodyPolicy.tab_html_banner'));
	$(".i18n-mailBodyPolicy-tab-html-image").text(i18next.t('mailBodyPolicy.tab_html_image'));
	$(".i18n-mailBodyPolicy-tab-html-script").text(i18next.t('mailBodyPolicy.tab_html_script'));
	$(".i18n-mailBodyPolicy-tab-html-beacon").text(i18next.t('mailBodyPolicy.tab_html_beacon'));
	$(".i18n-mailBodyPolicy-tab-html-hyperlink").text(i18next.t('mailBodyPolicy.tab_html_hyperlink'));
	$(".i18n-mailBodyPolicy-tab-html-preview").text(i18next.t('mailBodyPolicy.tab_html_preview'));
	$(".i18n-mailBodyPolicy-tab-html-modal-link-del-title").text(i18next.t('mailBodyPolicy.tab_html_modal_link_del_title'));
	$(".i18n-mailBodyPolicy-tab-html-modal-link-del-category").text(i18next.t('mailBodyPolicy.tab_html_modal_link_del_category'));
	$(".i18n-mailBodyPolicy-tab-html-modal-link-del-default").text(i18next.t('mailBodyPolicy.tab_html_modal_link_del_default'));
	$(".i18n-mailBodyPolicy-tab-html-modal-safe-browsing-api-key").text(i18next.t('mailBodyPolicy.tab_html_modal_safe_browsing_api_key'));
	$(".i18n-mailBodyPolicy-tab-html-modal-safe-browsing-client-id").text(i18next.t('mailBodyPolicy.tab_html_modal_safe_browsing_client_id'));
	$(".i18n-mailBodyPolicy-tab-text").text(i18next.t('mailBodyPolicy.tab_text'));
	$(".i18n-mailBodyPolicy-tab-text-banner").text(i18next.t('mailBodyPolicy.tab_text_banner'));
	
	//attachedFilePolicy
	$(".i18n-attachedFilePolicy-help").text(i18next.t('attachedFilePolicy.help'));
	$(".i18n-attachedFilePolicy-location-1depth").text(i18next.t('attachedFilePolicy.location_1depth'));
	$(".i18n-attachedFilePolicy-location-2depth").text(i18next.t('attachedFilePolicy.location_2depth'));
	$(".i18n-attachedFilePolicy-switch-on").text(i18next.t('attachedFilePolicy.switch_on'));
	$(".i18n-attachedFilePolicy-switch-off").text(i18next.t('attachedFilePolicy.switch_off'));
	$(".i18n-attachedFilePolicy-switch-allow").text(i18next.t('attachedFilePolicy.switch_allow'));
	$(".i18n-attachedFilePolicy-switch-block").text(i18next.t('attachedFilePolicy.switch_block'));
	$(".i18n-attachedFilePolicy-switch-removal").text(i18next.t('attachedFilePolicy.switch_removal'));
	$(".i18n-attachedFilePolicy-switch-keep").text(i18next.t('attachedFilePolicy.switch_keep'));
	$(".i18n-attachedFilePolicy-btn-submit").text(i18next.t('attachedFilePolicy.btn_submit'));
	$(".i18n-attachedFilePolicy-select-domain").text(i18next.t('attachedFilePolicy.select_domain'));
	
	$(".i18n-attachedFilePolicy-tab-default").text(i18next.t('attachedFilePolicy.tab_default'));
	$(".i18n-attachedFilePolicy-tab-default-reconfiguration").text(i18next.t('attachedFilePolicy.tab_default_reconfiguration'));
	$(".i18n-attachedFilePolicy-tab-default-file-size").text(i18next.t('attachedFilePolicy.tab_default_file_size'));
	$(".i18n-attachedFilePolicy-tab-default-file-size-unit").text(i18next.t('attachedFilePolicy.tab_default_file_size_unit'));
	$(".i18n-attachedFilePolicy-tab-default-limit-size").text(i18next.t('attachedFilePolicy.tab_default_limit_size'));
	$(".i18n-attachedFilePolicy-tab-default-extension-modulation").text(i18next.t('attachedFilePolicy.tab_default_extension_modulation'));
	$(".i18n-attachedFilePolicy-tab-default-html-file").text(i18next.t('attachedFilePolicy.tab_default_html_file'));
	$(".i18n-attachedFilePolicy-tab-default-script-file").text(i18next.t('attachedFilePolicy.tab_default_script_file'));
	$(".i18n-attachedFilePolicy-tab-default-script-file-help").text(i18next.t('attachedFilePolicy.tab_default_script_file_help'));
	$(".i18n-attachedFilePolicy-tab-default-extensions-not-supported").text(i18next.t('attachedFilePolicy.tab_default_extensions_not_supported'));
	$(".i18n-attachedFilePolicy-tab-default-isolation").text(i18next.t('attachedFilePolicy.tab_default_isolation'));

	$(".i18n-attachedFilePolicy-tab-office").text(i18next.t('attachedFilePolicy.tab_office'));
	$(".i18n-attachedFilePolicy-tab-office-obj").text(i18next.t('attachedFilePolicy.tab_office_obj'));
	$(".i18n-attachedFilePolicy-tab-office-macro").text(i18next.t('attachedFilePolicy.tab_office_macro'));
	$(".i18n-attachedFilePolicy-tab-office-encrypt-doc").text(i18next.t('attachedFilePolicy.tab_office_encrypt_doc'));
	$(".i18n-attachedFilePolicy-tab-office-dde").text(i18next.t('attachedFilePolicy.tab_office_dde'));
	$(".i18n-attachedFilePolicy-tab-office-excel-shape").text(i18next.t('attachedFilePolicy.tab_office_excel_shape'));
	
	$(".i18n-attachedFilePolicy-tab-pdf").text(i18next.t('attachedFilePolicy.tab_pdf'));
	$(".i18n-attachedFilePolicy-tab-pdf-java-script").text(i18next.t('attachedFilePolicy.tab_pdf_java_script'));
	$(".i18n-attachedFilePolicy-tab-pdf-annotations").text(i18next.t('attachedFilePolicy.tab_pdf_annotations'));
	$(".i18n-attachedFilePolicy-tab-pdf-actions").text(i18next.t('attachedFilePolicy.tab_pdf_actions'));
	
	$(".i18n-attachedFilePolicy-tab-zip").text(i18next.t('attachedFilePolicy.tab_zip'));
	$(".i18n-attachedFilePolicy-tab-zip-supported").text(i18next.t('attachedFilePolicy.tab_zip_supported'));
	$(".i18n-attachedFilePolicy-tab-zip-encrypt-zip").text(i18next.t('attachedFilePolicy.tab_zip_encrypt_zip'));
	$(".i18n-attachedFilePolicy-tab-zip-include-file").text(i18next.t('attachedFilePolicy.tab_zip_include_file'));
	$(".i18n-attachedFilePolicy-tab-zip-include-file-unit").text(i18next.t('attachedFilePolicy.tab_zip_include_file_unit'));
	$(".i18n-attachedFilePolicy-tab-zip-include-file-help").text(i18next.t('attachedFilePolicy.tab_zip_include_file_help'));
	
	$(".i18n-attachedFilePolicy-tab-etc").text(i18next.t('attachedFilePolicy.tab_etc'));
	$(".i18n-attachedFilePolicy-tab-etc-hancom").text(i18next.t('attachedFilePolicy.tab_etc_hancom'));
	$(".i18n-attachedFilePolicy-tab-etc-ichitaro").text(i18next.t('attachedFilePolicy.tab_etc_ichitaro'));
	$(".i18n-attachedFilePolicy-tab-etc-cad").text(i18next.t('attachedFilePolicy.tab_etc_cad'));
	
	//cdrDetailPolicy
	$(".i18n-cdrDetailPolicy-help").text(i18next.t('cdrDetailPolicy.help'));
	$(".i18n-cdrDetailPolicy-location-1depth").text(i18next.t('cdrDetailPolicy.location_1depth'));
	$(".i18n-cdrDetailPolicy-location-2depth").text(i18next.t('cdrDetailPolicy.location_2depth'));
	$(".i18n-cdrDetailPolicy-btn-submit").text(i18next.t('cdrDetailPolicy.btn_submit'));
	$(".i18n-cdrDetailPolicy-label-switch-on").text(i18next.t('cdrDetailPolicy.label_switch_on'));
	$(".i18n-cdrDetailPolicy-label-switch-off").text(i18next.t('cdrDetailPolicy.label_switch_off'));
	$(".i18n-cdrDetailPolicy-label-switch-deny").text(i18next.t('cdrDetailPolicy.label_switch_deny'));
	$(".i18n-cdrDetailPolicy-label-switch-origin").text(i18next.t('cdrDetailPolicy.label_switch_origin'));
	$(".i18n-cdrDetailPolicy-label-switch-download").text(i18next.t('cdrDetailPolicy.label_switch_download'));
	$(".i18n-cdrDetailPolicy-label-switch-comment").text(i18next.t('cdrDetailPolicy.label_switch_comment'));
	$(".i18n-cdrDetailPolicy-label-switch-nothing").text(i18next.t('cdrDetailPolicy.label_switch_nothing'));
	$(".i18n-cdrDetailPolicy-label-switch-image").text(i18next.t('cdrDetailPolicy.label_switch_image'));
	$(".i18n-cdrDetailPolicy-label-switch-string").text(i18next.t('cdrDetailPolicy.label_switch_string'));
	
	$(".i18n-cdrDetailPolicy-sd-doc-op-mode").text(i18next.t('cdrDetailPolicy.sd_doc_op_mode'));
	$(".i18n-cdrDetailPolicy-sd-doc-limit-size").text(i18next.t('cdrDetailPolicy.sd_doc_limit_size'));
	$(".i18n-cdrDetailPolicy-sd-doc-limit-mode").text(i18next.t('cdrDetailPolicy.sd_doc_limit_mode'));
	$(".i18n-cdrDetailPolicy-cqms-nor-option-macro").text(i18next.t('cdrDetailPolicy.cqms_nor_option_macro'));
	$(".i18n-cdrDetailPolicy-sd-doc-obj-mode").text(i18next.t('cdrDetailPolicy.sd_doc_obj_mode'));
	$(".i18n-cdrDetailPolicy-sd-doc-ddeauto-block-mode").text(i18next.t('cdrDetailPolicy.sd_doc_ddeauto_block_mode'));
	$(".i18n-cdrDetailPolicy-sd-enc-doc-mode").text(i18next.t('cdrDetailPolicy.sd_enc_doc_mode'));
	$(".i18n-cdrDetailPolicy-sd-enc-zip-mode").text(i18next.t('cdrDetailPolicy.sd_enc_zip_mode'));
	$(".i18n-cdrDetailPolicy-sd-attached-html-handling").text(i18next.t('cdrDetailPolicy.sd_attached_html_handling'));
	$(".i18n-cdrDetailPolicy-sd-script-block-ext-list").text(i18next.t('cdrDetailPolicy.sd_script_block_ext_list'));
	$(".i18n-cdrDetailPolicy-sd-ext-mode").text(i18next.t('cdrDetailPolicy.sd_ext_mode'));
	$(".i18n-cdrDetailPolicy-sd-except-ext").text(i18next.t('cdrDetailPolicy.sd_except_ext'));
	$(".i18n-cdrDetailPolicy-sd-nosup-ext-mode").text(i18next.t('cdrDetailPolicy.sd_nosup_ext_mode'));
	$(".i18n-cdrDetailPolicy-cqms-nosup-except-ext").text(i18next.t('cdrDetailPolicy.cqms_nosup_except_ext'));
	$(".i18n-cdrDetailPolicy-sd-original-file-import").text(i18next.t('cdrDetailPolicy.sd_original_file_import'));
	$(".i18n-cdrDetailPolicy-sd-use-original-zip-password").text(i18next.t('cdrDetailPolicy.sd_use_original_zip_password'));
	$(".i18n-cdrDetailPolicy-sd-deny-n-files-over-in-zip").text(i18next.t('cdrDetailPolicy.sd_deny_n_files_over_in_zip'));
	$(".i18n-cdrDetailPolicy-sd-supported-zip-ext").text(i18next.t('cdrDetailPolicy.sd_supported_zip_ext'));
	$(".i18n-cdrDetailPolicy-sd-break-filename-in-zip").text(i18next.t('cdrDetailPolicy.sd_break_filename_in_zip'));
	$(".i18n-cdrDetailPolicy-sd-doc-old").text(i18next.t('cdrDetailPolicy.sd_doc_old'));
	$(".i18n-cdrDetailPolicy-sd-excel-remove-shape-control").text(i18next.t('cdrDetailPolicy.sd_excel_remove_shape_control'));
	$(".i18n-cdrDetailPolicy-sd-pdf-remove-actions").text(i18next.t('cdrDetailPolicy.sd_pdf_remove_actions'));
	$(".i18n-cdrDetailPolicy-sd-pdf-remove-annotations").text(i18next.t('cdrDetailPolicy.sd_pdf_remove_annotations'));
	$(".i18n-cdrDetailPolicy-sd-pdf-remove-java-script").text(i18next.t('cdrDetailPolicy.sd_pdf_remove_java_script'));
	$(".i18n-cdrDetailPolicy-sd-remove-script-tag-from-mail-contents").text(i18next.t('cdrDetailPolicy.sd_remove_script_tag_from_mail_contents'));
	$(".i18n-cdrDetailPolicy-sd-remove-web-beacon-from-mail-contents").text(i18next.t('cdrDetailPolicy.sd_remove_web_beacon_from_mail_contents'));
	$(".i18n-cdrDetailPolicy-sd-remove-link-from-mail-contents").text(i18next.t('cdrDetailPolicy.sd_remove_link_from_mail_contents'));
	$(".i18n-cdrDetailPolicy-sd-removed-link-alert-message").text(i18next.t('cdrDetailPolicy.sd_removed_link_alert_message'));
	$(".i18n-cdrDetailPolicy-sd-image-sanitize-method-from-html").text(i18next.t('cdrDetailPolicy.sd_image_sanitize_method_from_html'));
	$(".i18n-cdrDetailPolicy-annotate-all-link-if-more-than-certain-number").text(i18next.t('cdrDetailPolicy.annotate_all_link_if_more_than_certain_number'));
	$(".i18n-cdrDetailPolicy-sd-html-contents-preview-on-outlook").text(i18next.t('cdrDetailPolicy.sd_html_contents_preview_on_outlook'));
	$(".i18n-cdrDetailPolicy-sd-show-result-url-from-mail-contents").text(i18next.t('cdrDetailPolicy.sd_show_result_url_from_mail_contents'));
	$(".i18n-cdrDetailPolicy-sd-sanitize-result-url-host-for-mail-contents").text(i18next.t('cdrDetailPolicy.sd_sanitize_result_url_host_for_mail_contents'));
	$(".i18n-cdrDetailPolicy-sd-create-url-from-txt-mail").text(i18next.t('cdrDetailPolicy.sd_create_url_from_txt_mail'));
	$(".i18n-cdrDetailPolicy-sd-result-url-filename").text(i18next.t('cdrDetailPolicy.sd_result_url_filename'));
	$(".i18n-cdrDetailPolicy-sd-create-html-from-mail").text(i18next.t('cdrDetailPolicy.sd_create_html_from_mail'));
	$(".i18n-cdrDetailPolicy-sd-create-result-link-method-from-html").text(i18next.t('cdrDetailPolicy.sd_create_result_link_method_from_html'));
	$(".i18n-cdrDetailPolicy-sd-result-link-name-from-html").text(i18next.t('cdrDetailPolicy.sd_result_link_name_from_html'));
	$(".i18n-cdrDetailPolicy-sd-add-prefix-suffix-to-resultlink-in-txtmail").text(i18next.t('cdrDetailPolicy.sd_add_prefix_suffix_to_resultlink_in_txtmail'));
	$(".i18n-cdrDetailPolicy-sd-result-url-filename").text(i18next.t('cdrDetailPolicy.sd_result_url_filename'));
	$(".i18n-cdrDetailPolicy-sd-create-html-from-mail").text(i18next.t('cdrDetailPolicy.sd_create_html_from_mail'));
	$(".i18n-cdrDetailPolicy-sd-create-result-link-method-from-html").text(i18next.t('cdrDetailPolicy.sd_create_result_link_method_from_html'));
	$(".i18n-cdrDetailPolicy-sd-result-link-name-from-html").text(i18next.t('cdrDetailPolicy.sd_result_link_name_from_html'));
	$(".i18n-cdrDetailPolicy-sd-add-prefix-suffix-to-resultlink-in-txtmail").text(i18next.t('cdrDetailPolicy.sd_add_prefix_suffix_to_resultlink_in_txtmail'));
	$(".i18n-cdrDetailPolicy-sd-safe-browsing-api-key").text(i18next.t('cdrDetailPolicy.sd_safe_browsing_api_key'));
	$(".i18n-cdrDetailPolicy-sd-safe-browsing-client-id").text(i18next.t('cdrDetailPolicy.sd_safe_browsing_client_id'));
	
	//certification
	$(".i18n-certification-title").text(i18next.t('certification.title'));
	$(".i18n-certification-help").text(i18next.t('certification.help'));
	$(".i18n-certification-err-msg").text(i18next.t('certification.err_msg'));
	$(".i18n-certification-btn-confirm").text(i18next.t('certification.btn_confirm'));
	$(".i18n-certification-btn-close").text(i18next.t('certification.btn_close'));
	
	$(".i18n-errNotiMsg-msg-content8").text(i18next.t('errNotiMsg.msg_content_8'));
	
}