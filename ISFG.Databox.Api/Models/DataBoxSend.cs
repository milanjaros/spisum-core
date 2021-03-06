﻿using System.Collections.Generic;
using ISFG.Alfresco.Api.Models;

namespace ISFG.DataBox.Api.Models
{
    public class DataBoxSend
    {
        #region Constructors

        public DataBoxSend(string recipientId, string senderName, string subject, List<FormDataParam> files, string body = null)
        {
            RecipientId = recipientId;
            SenderName = senderName;
            Subject = subject;
            Files = files;
            Body = body;
        }

        #endregion

        #region Properties

        public string Body { get; set; }
        public string Subject { get; set; }
        public string RecipientId { get; set; }
        public string SenderName { get; set; }
        public List<FormDataParam> Files { get; set; }

        #endregion
    }
}
